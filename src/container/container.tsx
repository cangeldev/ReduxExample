import { View, Text } from 'react-native'
import React from 'react'
import { StackNavigator } from '../navigation'

export const Container = () => {
    return (
        <View style={{ flex: 1 }}>
            <StackNavigator />
        </View>
    )
}
