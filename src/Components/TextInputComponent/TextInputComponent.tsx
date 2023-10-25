import React from 'react'
import { Text, TextInput, View } from 'react-native'
import styles from './styles'
import Svg, { Path } from 'react-native-svg'
import ProfileIcon from '../../Assets/Icons/ProfileIcon'

type props = {
    label: string,
    value: string,
    onChangeText: (text: string) => void,

}
interface IProps {
    props: props
}

const TextInputComponent = ({ props }: IProps) => {

    type enumSvg = {
        [key: string]: JSX.Element;
    }

  

    const enumSvgInput: enumSvg = {
        ['Email']: <ProfileIcon/>,
        ['Usuário']: <ProfileIcon />,
        
    }

    return (
        <View>
            <Text style={styles.label}>{props.label}</Text>
            <View style={styles.container}>
                {enumSvgInput[props.label]}
                <TextInput style={styles.input}
                    onChangeText={props.onChangeText}
                    value={props.value}
                    placeholder={props.label}
                />
  
            </View>
        </View>
    )
}

export default TextInputComponent
