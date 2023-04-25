import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { CustomButton, CustomInput, ImagePicker } from '../../components'
import style from './style'

export const EditProfilePages = () => {
    const navigation = useNavigation<any>()
    const dispatch = useDispatch()
    const handleSubmit = () => {
        // dispatch(setUser({ name: "denem123e", surname: "deneme2", password: "deneme3", age: 3 }));
        navigation.navigate("ProfilePages")
    };

    return (
        <View style={style.container}>
            <Text style={style.title}>
                Edit Profile Pages
            </Text>
            <ImagePicker />
            <CustomInput
                placeholder='John'
                title='Name:'
                field='name'
            />
            <CustomInput
                placeholder='Doe'
                title='Surname:'
                field='surname'
            />
            <CustomInput
                placeholder='********'
                title='Password:' secure={true}
                field='password'
            />
            <CustomInput
                title='Age'
                placeholder='24'
                field='age'
            />
            <CustomButton
                onClick={() => {
                    handleSubmit()
                }}
                title='Go Profile'
            />
        </View>
    )
}