import * as React from 'react';
import { Avatar, List, Divider, Appbar } from 'react-native-paper';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';

const ContactListScreen = ({ navigation, route }) => {
    const [users, setUsers] = useState([]);
    const isFocused = useIsFocused();
    console.log(isFocused);

    useEffect(() => {
        async function getusers() {
            const result = await axios.get('http://professornilson.com/testeservico/clientes')
                .then((data) => {
                    setUsers(data.data);
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        getusers();
    }, []);

    const Contact = (props) => {
        return (
            <View>
                <View>
                    <List.Item
                        title={props.nome}
                        description={props.telefone}
                        left={() => <Avatar.Image size={90} source={require('../../assets/avatar.png')} />}
                        onPress={() => navigation.navigate('EditarContato', {
                            id: props.id,
                            nome: props.nome,
                            cpf: props.cpf,
                            email: props.email,
                            telefone: props.telefone
                        })}
                    />
                    <Divider />
                </View>
            </View>

        );
    }

    return (
        <View>
            <View>
                <Appbar.Header style={{ backgroundColor: '#0d6efd' }}>
                    <Appbar.Content title="Lista de contatos" style={{ alignItems: 'center' }} />
                    <Appbar.Action icon={'plus'} onPress={() => navigation.navigate('NovoContato')} />
                </Appbar.Header>
            </View>
            <SafeAreaView>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    {
                        users.map((contact, i) => (
                            <Contact nome={contact.nome} telefone={contact.telefone} avatar={'../../assets/avatar.png'} email={contact.email} key={i} id={contact.id} />
                        ))
                    }
                </ScrollView>
            </SafeAreaView>
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
    },
    contentContainer: {
        paddingVertical: 50
    }
});

export default ContactListScreen;