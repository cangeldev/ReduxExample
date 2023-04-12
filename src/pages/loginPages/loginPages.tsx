import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setName } from '../../features/userSlice'

export const LoginPages = () => {
    const navigation = useNavigation<any>()
    const dispatch = useDispatch()
    return (
        <View>
            <Text>loginPages</Text>
            <TouchableOpacity onPress={() => {
                dispatch(setName())
                navigation.navigate("ProfilePages")
            }}>
                <Text>
                    Go Profile
                </Text>
            </TouchableOpacity>
        </View>
    )
}