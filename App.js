import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import { colors } from './colors/colors';
import LoginScreen from './screens/LoginScreen';


function App(props) {
  return (
    <View style={styles.container}>
      <LoginScreen />
      <StatusBar
        backgroundColor={colors.white}
        barStyle={"dark-content"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;