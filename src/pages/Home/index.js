import React, {useEffect} from 'react';
import {
  Image,
  ScrollView,
  ScrollViewComponent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
  ProfileDummy,
} from '../../assets';
import Gap from '../../components/atom/Gap';
import {
  FoodCard,
  HomeProfile,
  HomeTabSection,
} from '../../components/molecules';
import {getFoodData} from '../../redux/action';

const Home = () => {
  const dispatch = useDispatch();
  const {food} = useSelector(state => state.homeReducer);
  useEffect(() => {
    dispatch(getFoodData());
  }, []);
  return (
    <View style={styles.page}>
      <HomeProfile />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodCardContainer}>
            <Gap width={24} />
            {food.map(itemFood => {
              return (
                <FoodCard
                  name={itemFood.name}
                  image={{uri: itemFood.picturePath}}
                  rating={4}
                />
              );
            })}
            {/* <FoodCard image={FoodDummy2} />
            <FoodCard image={FoodDummy3} />
            <FoodCard image={FoodDummy4} /> */}
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabContainer}>
        <HomeTabSection />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1},
  foodCardContainer: {flexDirection: 'row', marginVertical: 24},
  tabContainer: {flex: 1},
});
