import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SignIn, SplashScreen} from './pages';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {Provider} from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          {/* Rest of your app code */}
          {/* <SplashScreen /> */}
          <Router />
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
