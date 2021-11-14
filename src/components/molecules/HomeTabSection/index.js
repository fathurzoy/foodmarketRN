import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import ItemListFood from '../ItemListFood';
import Rating from '../Rating';

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

const NewTaste = () => {
  return (
    <View style={styles.containerPopular}>
      <ItemListFood image={FoodDummy1} />
      <ItemListFood image={FoodDummy2} />
      <ItemListFood image={FoodDummy3} />
      <ItemListFood image={FoodDummy4} />
      <ItemListFood image={FoodDummy4} />
      <ItemListFood image={FoodDummy4} />
    </View>
  );
};

const Popular = () => {
  return (
    <View style={{paddingTop: 8}}>
      <ItemListFood image={FoodDummy2} />
      <ItemListFood image={FoodDummy2} />
      <ItemListFood image={FoodDummy4} />
      <ItemListFood image={FoodDummy4} />
      <ItemListFood image={FoodDummy1} />
      <ItemListFood image={FoodDummy4} />
    </View>
  );
};

const Recommended = () => {
  return (
    <View style={styles.containerRecommended}>
      <ItemListFood image={FoodDummy4} />
      <ItemListFood image={FoodDummy3} />
      <ItemListFood image={FoodDummy1} />
      <ItemListFood image={FoodDummy4} />
      <ItemListFood image={FoodDummy4} />
      <ItemListFood image={FoodDummy4} />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const HomeTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
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

export default HomeTabSection;

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
