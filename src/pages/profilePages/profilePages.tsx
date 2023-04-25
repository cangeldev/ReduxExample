import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import type { RootState } from '../../features/store'
import { useSelector } from 'react-redux'
import style from './style'
import { CustomButton, CustomView, ImagePicker } from '../../components'

export const ProfilePages = () => {
    const name = useSelector((state: RootState) => state.userInfo.UserLogin.name)
    const surname = useSelector((state: RootState) => state.userInfo.UserLogin.surname)
    const password = useSelector((state: RootState) => state.userInfo.UserLogin.password)
    const age = useSelector((state: RootState) => state.userInfo.UserLogin.age)
    
    const navigation = useNavigation<any>()
    return (
        <View style={style.container}>
            <Text style={style.title}>
                Profile Pages
            </Text>
            <ImagePicker visible='false' disabled={true} />
            <CustomView title='Name:' text={name} />
            <CustomView title='Surname:' text={surname} />
            <CustomView title='Password:' text={password} />
            <CustomView title='Age:' text={age} />
            <CustomButton
                onClick={() => {
                    navigation.navigate("EditProfilePages")
                }}
                title='Go Edit Profile'
            />
        </View>
    )
}
