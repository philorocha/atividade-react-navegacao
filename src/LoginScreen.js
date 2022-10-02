import * as React from 'react';
import { Avatar, TextInput, Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [login, setLogin] = React.useState("");
    const [password, setPassword] = React.useState("");

    return(
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>

            </View>
            <Avatar.Image size={120} source={require('../assets/avatar.png')} style={styles.avatar}/>
            <TextInput
                selectionColor='none'
                style={styles.input}
                mode='outlined'
                label={'Login'}
                value={login}
                onChangeText={login => setLogin(login)}
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
            <Button mode='contained' color='#0d6efd' style={styles.button} onPress={() => navigation.navigate('Lista de Contatos')}>Login</Button>
            <Button mode='contained' color='red' style={styles.button} onPress={() => navigation.navigate('Cadastrar Usuario')}>Cadastre-se</Button>
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
        marginLeft: 4,
        marginRight: 4,
    },
    button: {
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 4,
        marginRight: 4
    }
});

export default LoginScreen;