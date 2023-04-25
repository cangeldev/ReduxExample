import { View, Text, TextInput } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { useDispatch } from 'react-redux'
import { setName, setSurname, setPassword, setAge } from '../../features/userSlice'
interface ICustomInput {
    placeholder: string,
    title: string,
    secure?: boolean,
    field: string
}

export const CustomInput: FC<ICustomInput> = ({ placeholder, title, secure, field }) => {
    const dispatch = useDispatch();
    const handleChange = (newValue: string) => {
        if (field === 'name') {
            dispatch(setName(newValue));
        } else if (field === 'surname') {
            dispatch(setSurname(newValue));
        }
        else if (field === 'password') {
            dispatch(setPassword(newValue));
        }
        else if (field === 'age') {
            dispatch(setAge(newValue));
        }
    };
    return (
        <View style={style.container}>
            <TextInput
                style={style.inputContainer}
                placeholder={placeholder}
                placeholderTextColor={"grey"}
                secureTextEntry={secure}
                autoCapitalize='none'
                onChangeText={handleChange}
            />
            <Text style={style.text}>
                {title}
            </Text>
        </View>
    )
}