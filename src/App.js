import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SplashScreen} from './pages';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <>
      <NavigationContainer>
        {/* Rest of your app code */}
        <SplashScreen />
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});