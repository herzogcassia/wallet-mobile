import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import Svg, { Path } from 'react-native-svg'
import ProfileIcon from '../../Assets/Icons/ProfileIcon'
import CloseEyeIcon from '../../Assets/Icons/CloseEyeIcon'

type props = {
    label: string,
    value: string,
    onChangeText: (text: string) => void,

}
interface IProps {
    props: props
}

const TextInputPassword = ({ props }: IProps) => {

    return (
        <View>
            <View style={styles.container}>
                <ProfileIcon />
                <TextInput style={styles.input}
                    onChangeText={props.onChangeText}
                    value={props.value}
                    placeholder={'Senha'}
                    secureTextEntry={true}
                    keyboardType={'numeric'}
                />
                <TouchableOpacity onPress={() => {
                    console.log('mudou');
                }}>
                    <CloseEyeIcon/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TextInputPassword
