import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export const LoginPages = () => {
    const navigation = useNavigation<any>()
    return (
        <View>
            <Text>loginPages</Text>
            <TouchableOpacity onPress={() => navigation.navigate("ProfilePages")}>
                <Text>
                    Go Profile
                </Text>
            </TouchableOpacity>
        </View>
    )
}