import { View, TouchableOpacity, Image } from 'react-native'
import React, { FC } from 'react'
import { launchImageLibrary } from 'react-native-image-picker'
import { Camera } from '../../assets'
import style from './style'

interface IPickerImage {
    visible?: string,
    disabled?: boolean
}
export const ImagePicker: FC<IPickerImage> = ({ visible, disabled }) => {
    const [response, setResponse] = React.useState<any>(null)
    const openGalery = () => {
        launchImageLibrary({
            selectionLimit: 0,
            mediaType: 'photo',
            includeBase64: false,
        }, setResponse)
    }
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={openGalery}
            style={style.button}>
            {response?.assets &&
                response?.assets.map(({ uri }: any) => (
                    <View key={uri}>
                        <Image
                            style={style.profileImage}
                            source={{ uri: uri }}
                        />
                    </View>
                ))}
            {
                visible == "false" ? null : <View style={style.cameraIconView}>
                    <Image
                        source={Camera}
                        style={style.cameraIcon}
                    />
                </View>
            }
        </TouchableOpacity>
    )
}
