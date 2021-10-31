import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SignIn, SplashScreen} from './pages';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';

const App = () => {
  return (
    <>
      <NavigationContainer>
        {/* Rest of your app code */}
        {/* <SplashScreen /> */}
        <Router />
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
