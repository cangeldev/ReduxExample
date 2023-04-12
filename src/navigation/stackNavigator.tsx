import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { EditProfilePages, LoginPages, ProfilePages } from '../pages';

export const StackNavigator = () => {

    const Stack = createStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name='LoginPages'
                    component={LoginPages}
                />
                <Stack.Screen
                    name='ProfilePages'
                    component={ProfilePages}
                />
                <Stack.Screen
                    name='EditProfilePages'
                    component={EditProfilePages}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}