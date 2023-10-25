import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import colors from '../../Constants';
import GoogleIcon from '../../Assets/Icons/GoogleIcon';
import FacebookIcon from '../../Assets/Icons/FacebookIcon';


type ButtonProps = {
    onPress: () => void;
    color?: string;
    label: string;
    disabled?: boolean;
}

interface IProps {
    props: ButtonProps;
}


const ButtonComponentIcon = ({ props }: IProps) => {
    type enumBg = {
        [key: string]: string
    }

    type enumSvg = {
        [key: string]: JSX.Element;
    }

    const enumBGColor: enumBg = {
        ['Facebook']: '#4368C7',
        ['Google']: '#FFFFFF'
    }

    const enumIcon: enumSvg = {
        ['Google']: <GoogleIcon />,
        ['Facebook']: <FacebookIcon />
    }

    return (
        <TouchableOpacity style={{ ...styles.button, backgroundColor: enumBGColor[props?.label] }} onPress={props?.onPress} >
            {enumIcon[props?.label]}
            <Text style={{ ...styles.label, color: props.color }} children={props?.label} />
        </TouchableOpacity>
    )
}

export default ButtonComponentIcon
