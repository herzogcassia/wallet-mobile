import React from 'react'
import { Text, TouchableOpacity} from 'react-native';
import styles from './styles';


type ButtonProps = {
    onPress: () => void;
    color?: string;
    label: string;
    disabled?: boolean;
}

interface IProps {
    props?: ButtonProps;
}


const ButtonComponent = ({ props }: IProps) => {
    return (
        <TouchableOpacity style={styles.button} onPress={props?.onPress} >
            <Text style={styles.label} children={props?.label} />
        </TouchableOpacity>
    )
}

export default ButtonComponent
