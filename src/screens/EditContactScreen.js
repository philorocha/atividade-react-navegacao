import * as React from 'react';
import { TextInput, Button, Appbar } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';


const deleteUser = async (id, { navigation, route }) => {
    const result = await axios.delete(`http://professornilson.com/testeservico/clientes/${id}`)
        .then((response) => {
            navigation.goBack();
        })
        .catch((err) => {
            console.log(err);
        });
}

const updateUser = async (id, nome, email, telefone, { navigation, route }) => {
    const result = await axios.put(`http://professornilson.com/testeservico/clientes/${id}`, {
        nome: nome,
        email: email,
        telefone: telefone
    })
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
}

const EditContactScreen = ({ route, navigation }) => {
    const {id, nome, cpf, email, telefone} = route.params;
    const [userName, setUserName] = useState(nome);
    const [userEmail, setUserEmail] = useState(email);
    const [userPhone, setUserPhone] = useState(telefone);
    const [userCpf, setCpf] = useState(cpf);

    return(
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Appbar.Header style={{ backgroundColor: '#0d6efd' }}>
                    <Appbar.BackAction onPress={() => navigation.navigate('ListaContatos')} />
                    <Appbar.Content title="Contato" style={{ alignItems: 'center' }}/>
                </Appbar.Header>
            </View>
            <TextInput
                selectionColor='none'
                style={styles.input}
                mode='outlined'
                label={'Nome'}
                value={userName}
                onChangeText={userName => setUserName(userName)}
                maxLength={255}
            />
            <TextInput
                style={styles.input}
                mode='outlined'
                label={'E-mail'}
                value={userEmail}
                onChangeText={userEmail => setUserEmail(userEmail)}
                textContentType={'emailAddress'}
                maxLength={255}
            />
            <TextInput
                style={styles.input}
                mode='outlined'
                label={'Telefone'}
                value={userPhone}
                onChangeText={userPhone => setUserPhone(userPhone)}
                textContentType={'telephoneNumber'}
                maxLength={255}
            />
            <Button mode='contained' color='#0d6efd' style={styles.button} onPress={() => {
                updateUser(id, userName, userEmail, userPhone, { navigation, route });
            }}>Alterar</Button>
            <Button mode='contained' color='#dc3545' style={styles.button} onPress={() => deleteUser(id, { navigation })}>Excluir</Button>
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

export default EditContactScreen;