import React, { useState } from 'react'
import { Text, View } from 'react-native'
import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent'
import TextInputComponent from '../../Components/TextInputComponent/TextInputComponent'
import TextInputPassword from '../../Components/TextInputPassword/TextInputPassword'
import ButtonComponentIcon from '../../Components/ButtonComponentIcon/ButtonComponentIcon'
import colors from '../../Constants'

const Login = () => {

    const [userValue, setUserValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [emailValue, setEmailValue] = useState('')



    return (
        <View style={{ padding: 16, gap: 30, alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: colors.purple}}>Immediately feel the
                ease of transacting just by registering</Text>
            <Text children={'Sign up with'} />
            <View style={{ flexDirection: 'row', gap: 20, }}>
                <ButtonComponentIcon props={{
                    onPress: () => {
                        console.log('clicou');

                    },
                    color: '#bDBDBD',
                    label: 'Google',
                    disabled: undefined
                }} />
                <ButtonComponentIcon props={{
                    onPress: () => {
                        console.log('clicou');

                    },
                    color: '#ffff',
                    label: 'Facebook',
                    disabled: undefined
                }} />
            </View>
            <TextInputComponent props={{
                label: 'Usuário',
                value: userValue,
                onChangeText: (text) => { setUserValue(text) }
            }} />

            <TextInputComponent props={{
                label: 'Email',
                value: emailValue,
                onChangeText: (text) => { setEmailValue(text) }
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
                label: 'Register',
            }} />
            <View style={{ flexDirection: 'row' }}>
                <Text children={'You have account? '} />
                <Text style={{ color: '#81C2FF' }} onPress={() => { }} children={'Login'} />
            </View>
        </View>
    )
}

export default Login
