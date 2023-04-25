import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { EditProfilePages, ProfilePages } from '../pages';

export const StackNavigator = () => {

    const Stack = createStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name='EditProfilePages'
                    component={EditProfilePages}
                />
                <Stack.Screen
                    name='ProfilePages'
                    component={ProfilePages}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}