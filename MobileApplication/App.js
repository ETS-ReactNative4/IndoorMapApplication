import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./routes/StackNavigator";
import { DrawerNavigator } from "./routes/DrawerNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />  
      <MainStackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
