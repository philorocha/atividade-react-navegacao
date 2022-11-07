import * as React from 'react';
import { TextInput, Button, Appbar } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../config/firebase';

const RegisterUserScreen = ({ navigation }) => {
    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [cpf, setCpf] = React.useState('');

    return(
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Appbar.Header style={{backgroundColor: '#0d6efd'}}>
                    <Appbar.BackAction onPress={() => navigation.navigate('Login')} />
                    <Appbar.Content title="Contato" style={{alignItems: 'center'}}/>
                </Appbar.Header>
            </View>
            <TextInput
                selectionColor='none'
                activeOutlineColor='none'
                style={styles.input}
                mode='outlined'
                label={'Nome'}
                value={nome}
                onChangeText={nome => setNome(nome)}
                maxLength={255}
            />
            <TextInput
                selectionColor='none'
                activeOutlineColor='none'
                style={styles.input}
                mode='outlined'
                label={'CPF'}
                value={cpf}
                onChangeText={cpf => setCpf(cpf)}
                maxLength={14}
            />
            <TextInput
                style={styles.input}
                activeOutlineColor='none'
                mode='outlined'
                label={'E-mail'}
                value={email}
                onChangeText={email => setEmail(email)}
                textContentType={'emailAddress'}
                maxLength={255}
            />
            <TextInput
                style={styles.input}
                activeOutlineColor='none'
                mode='outlined'
                label={'Senha'}
                value={password}
                onChangeText={password => setPassword(password)}
                secureTextEntry={true}
                maxLength={255}
            />
            <Button mode='contained' color='#0d6efd' style={styles.button} onPress={() => {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        console.log('ok');
                    })
                    .catch((error) => {
                        console.error(error.code, error.message);
                    })
            }}>Salvar</Button>
            <View style={{ flex: 1 }}>
            
            </View>
        </View>  
    );
};

const styles = StyleSheet.create({
    avatar: {
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    input: {
        marginLeft: 10,
        marginRight: 10,
    },
    button: {
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 4,
        marginRight: 4
    }
});

export default RegisterUserScreen;