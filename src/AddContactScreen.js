import * as React from 'react';
import { Avatar, TextInput, Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const AddContactScreen = ({ navigation }) => {
    const [nome, setNome] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [telefone, setTelefone] = React.useState("");

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
                label={'Telefone'}
                value={telefone}
                onChangeText={telefone => setTelefone(telefone)}
                textContentType={'telephoneNumber'}
                maxLength={255}
            />
            <Button mode='contained' color='#0d6efd' style={styles.button} onPress={() => navigation.navigate('Lista de Contatos')}>Salvar</Button>
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

export default AddContactScreen;