import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
  ProfileDummy,
} from '../../assets';
import Gap from '../../components/atom/Gap';
import {FoodCard} from '../../components/molecules';

const Home = () => {
  return (
    <View>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.appName}>FoodMarket</Text>
          <Text style={styles.desc}>Let's get some foods</Text>
        </View>
        <Image source={ProfileDummy} style={styles.profile} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.foodCardContainer}>
          <Gap width={24} />
          <FoodCard image={FoodDummy1} />
          <FoodCard image={FoodDummy2} />
          <FoodCard image={FoodDummy3} />
          <FoodCard image={FoodDummy4} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
  },
  appName: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  desc: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#bd92a3'},
  profile: {width: 50, height: 50, borderRadius: 8},
  foodCardContainer: {flexDirection: 'row', marginVertical: 24},
});
