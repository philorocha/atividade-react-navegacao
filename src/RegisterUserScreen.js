import * as React from 'react';
import { Avatar, TextInput, Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const RegisterUserScreen = ({ navigation }) => {
    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [cpf, setCpf] = React.useState('');

    return(
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
            
            </View>
            <TextInput
                selectionColor='none'
                style={styles.input}
                mode='outlined'
                label={'Nome'}
                value={nome}
                onChangeText={nome => setNome(nome)}
                maxLength={255}
            />
            <TextInput
                selectionColor='none'
                style={styles.input}
                mode='outlined'
                label={'CPF'}
                value={cpf}
                onChangeText={cpf => setCpf(cpf)}
                maxLength={14}
            />
            <TextInput
                style={styles.input}
                mode='outlined'
                label={'E-mail'}
                value={email}
                onChangeText={email => setEmail(email)}
                textContentType={'emailAddress'}
                maxLength={255}
            />
            <TextInput
                style={styles.input}
                mode='outlined'
                label={'Senha'}
                value={password}
                onChangeText={password => setPassword(password)}
                secureTextEntry={true}
                maxLength={255}
            />
            <Button mode='contained' color='#0d6efd' style={styles.button}>Salvar</Button>
            <View style={{flex: 1}}>
            
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