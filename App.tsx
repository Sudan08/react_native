import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
// import  MainScreen  from './MainScreen';
// import ChartsScreen from './ChartsScreen';
// import ReportsScreen from './ReportsScreen';
// import TablesScreen from './TablesScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Feed" component={Feed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}