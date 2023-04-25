import { View, Text } from 'react-native'
import React, { FC } from 'react'
import style from './style'
interface ICustomView {
    title: string,
    text: any
}
export const CustomView: FC<ICustomView> = ({ title, text }) => {
    return (
        <View style={style.container}>
            <Text style={style.title}>
                {
                    title
                }
            </Text>
            <Text style={style.text}>
                {text}
            </Text>
        </View>
    )
}