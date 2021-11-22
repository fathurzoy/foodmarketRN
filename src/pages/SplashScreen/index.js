import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';
import {getData} from '../../utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate('SignIn"); tidak hilang tapi ditumpuk
      getData('token').then(res => {
        console.log('token: ', res);
        if (res) {
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        } else {
          navigation.replace('SignIn'); //page akan hilang
        }
      });
    }, 2000);
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#ffc700',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo />
      <View style={{height: 38}} />
      <Text
        style={{fontSize: 32, color: '#020202', fontFamily: 'Poppins-Medium'}}>
        FoodMarket
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
