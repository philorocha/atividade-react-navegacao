import * as React from 'react';
import { Appbar, TextInput, Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';

const addUser = async (nome, email, telefone, { navigation }) => {
    const result = axios.post('http://professornilson.com/testeservico/clientes', {
        nome: nome,
        email: email,
        telefone: telefone
    })
    .then((response) => {
        navigation.goBack();
    })
    .catch((error) => {
        console.log(error);
    })
}

const AddContactScreen = ({ navigation }) => {
    const [nome, setNome] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [telefone, setTelefone] = React.useState("");

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Appbar.Header style={{ backgroundColor: '#0d6efd' }}>
                    <Appbar.BackAction onPress={() => navigation.navigate('ListaContatos')} />
                    <Appbar.Content title="Contato" style={{ alignItems: 'center' }} />
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
                label={'Telefone'}
                value={telefone}
                onChangeText={telefone => setTelefone(telefone)}
                textContentType={'telephoneNumber'}
                maxLength={255}
            />
            <Button mode='contained' color='#0d6efd' style={styles.button} onPress={
                () => addUser(nome, email, telefone, { navigation })
            }>Salvar</Button>
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

export default AddContactScreen;