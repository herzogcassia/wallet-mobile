import React, { useState } from 'react'
import { View } from 'react-native'
import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent'
import TextInputComponent from '../../Components/TextInputComponent/TextInputComponent'
import TextInputPassword from '../../Components/TextInputPassword/TextInputPassword'

const Login = () => {

    const [userValue, setUserValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')


    return (
        <View style={{padding: 16, gap: 30, alignItems: 'center'}}>
            <TextInputComponent props={{
                label: 'Usuário',
                value: userValue,
                onChangeText: (text) => { setUserValue(text) }
            }} />
            <TextInputPassword props={{
                label: 'Senha',
                value: passwordValue,
                onChangeText: (text) => { setPasswordValue(text) }
            }} />
            <ButtonComponent props={{
                onPress: () => {
                    console.log('log');

                },
                label: 'Login',
            }} />
        </View>
    )
}

export default Login
