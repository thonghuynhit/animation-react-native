/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import IndexTabNavigation from './src/navigations/index'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <IndexTabNavigation />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  
});
export default App;
