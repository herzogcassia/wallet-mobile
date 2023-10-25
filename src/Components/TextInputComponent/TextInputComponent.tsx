import React from 'react'
import { Text, TextInput, View } from 'react-native'
import styles from './styles'
import Svg, { Path } from 'react-native-svg'
import ProfileIcon from '../../Assets/Icons/ProfileIcon'
import EmailIcon from '../../Assets/Icons/EmailIcon'

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
        ['Email']: <EmailIcon/>,
        ['Usuário']: <ProfileIcon />,
        
    }

    return (
        <View>
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
