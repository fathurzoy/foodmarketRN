import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import ItemListFood from '../ItemListFood';
import Rating from '../Rating';
import {useNavigation} from '@react-navigation/native';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabBarStyle}
    tabStyle={styles.tabStyle}
    renderLabel={({route, focused}) => (
      <Text style={styles.tabText(focused)}>{route.title}</Text>
    )}
  />
);

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.containerPopular}>
        <ItemListFood
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate('OrderDetail')}
          type="in-progress"
          items={3}
          price="2.000.000"
          name="Sop Bumil"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy2}
          onPress={() => navigation.navigate('OrderDetail')}
          type="in-progress"
          items={3}
          price="2.000.000"
          name="Sop Bumil"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate('OrderDetail')}
          type="in-progress"
          items={3}
          price="2.000.000"
          name="Sop Bumil"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy4}
          onPress={() => navigation.navigate('OrderDetail')}
          type="in-progress"
          items={3}
          price="2.000.000"
          name="Sop Bumil"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy4}
          onPress={() => navigation.navigate('OrderDetail')}
          type="in-progress"
          items={3}
          price="2.000.000"
          name="Sop Bumil"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy4}
          onPress={() => navigation.navigate('OrderDetail')}
          type="in-progress"
          items={3}
          price="2.000.000"
          name="Sop Bumil"
        />
      </View>
    </ScrollView>
  );
};

const PastOrder = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListFood
          rating={3}
          image={FoodDummy2}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-orders"
          items={3}
          price="2.000.000"
          name="Sop Bumil"
          date="Jun 12, 14:00"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy2}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-orders"
          items={3}
          price="2.000.000"
          name="Sop Bumil"
          date="Jun 12, 14:00"
          status="Cancel"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy4}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-orders"
          items={3}
          price="2.000.000"
          name="Sop Bumil"
          date="Jun 12, 14:00"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy4}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-orders"
          items={3}
          price="2.000.000"
          name="Sop Bumil"
          date="Jun 12, 14:00"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-orders"
          items={3}
          price="2.000.000"
          name="Sop Bumil"
          date="Jun 12, 14:00"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy4}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-orders"
          items={3}
          price="2.000.000"
          name="Sop Bumil"
          date="Jun 12, 14:00"
          status="Cancel"
        />
      </View>
    </ScrollView>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const OrderTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Order'},
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrder,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.tabView}
    />
  );
};

export default OrderTabSection;

const styles = StyleSheet.create({
  tabView: {backgroundColor: 'white'},
  indicator: {
    backgroundColor: '#020202',
    height: 3,
    width: '15%',
    marginLeft: '3%',
  },
  tabBarStyle: {
    backgroundColor: 'white',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  tabStyle: {},
  tabText: focused => ({
    fontFamily: 'Poppins-Medium',
    color: focused ? '#020202' : '#8D92A3',
  }),
  containerNewTaste: {paddingTop: 8, paddingHorizontal: 24},
  containerPopular: {paddingTop: 8, paddingHorizontal: 24},
  containerRecommended: {paddingTop: 8, paddingHorizontal: 24},
});
