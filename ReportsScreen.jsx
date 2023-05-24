import React from 'react';
import { View, Text } from 'react-native';
export function ReportsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Report Screen</Text>
            <Text style={{ color: '#1ACB97' }}>Hello</Text>
            <Text style={{ color: '#1ACB97' }}>World</Text>
        </View>
    );
}

export default ReportsScreen;