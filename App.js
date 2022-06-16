import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import { colors } from './colors/colors';
import LoginScreen from './screens/LoginScreen';


import { Provider } from 'react-redux';
import Store from './store/store.js';
import { Persistor } from "./store/store.js"
import { PersistGate } from 'redux-persist/integration/react';

import { NavigationContainer } from "@react-navigation/native"
import StackNavigator from './navigators/StackNavigator';

function App(props) {
  return (
    <Provider store={Store}>
      <PersistGate
        loading={null}
        persistor={Persistor}
      >
        <View style={styles.container}>
          <NavigationContainer>
            <StackNavigator />
            <StatusBar
              backgroundColor={colors.white}
              barStyle={"dark-content"}
            />
          </NavigationContainer>
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;