import * as React from 'react';
import { TextInput, Button, Appbar } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';


const deleteUser = async (id, { navigation }) => {
    const result = await axios.delete(`http://professornilson.com/testeservico/clientes/${id}`)
        .then((response) => {
            console.log(response.data);
            navigation.navigate('ListaContatos');
        })
        .catch((err) => {
            console.log(err);
        });
}

const EditContactScreen = ({ route, navigation }) => {
    const {id, nome, cpf, email, telefone} = route.params;
    const [userName, setUserName] = React.useState(nome);
    const [userEmail, setUserEmail] = React.useState(email);
    const [userPhone, setUserPhone] = React.useState(telefone);
    const [userCpf, setCpf] = React.useState(cpf);

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
            <Button mode='contained' color='#0d6efd' style={styles.button}>Alterar</Button>
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