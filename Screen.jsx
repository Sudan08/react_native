import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Profile"
                component={Profile} />
        </Stack.Navigator>
    );
}