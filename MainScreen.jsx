import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./HomeScreen.jsx";
import SettingScreen from "./SettingScreen.jsx"
export function MainScreen(props: any) {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = "ios-home";
                    if(route.name === 'Home') {
                    }
                    else if (route.name === 'Setting') {
                        iconName = 'ios-list';
                    } 
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                
            })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Setting" component={SettingScreen} />
        </Tab.Navigator>
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