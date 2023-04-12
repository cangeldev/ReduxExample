import { View, Text } from 'react-native'
import React from 'react'
import type { RootState } from '../../features/store'
import { useSelector } from 'react-redux'
export const ProfilePages = () => {
    const name = useSelector((state: RootState) => state.deneme.name)
    
    return (
        <View>
            <Text>profilePages</Text>
            <Text>
                {
                    name
                }
            </Text>
        </View>
    )
}
