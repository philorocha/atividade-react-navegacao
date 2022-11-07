import * as React from 'react';
import { Avatar, List, Divider, Appbar, FAB } from 'react-native-paper';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useIsFocused } from "@react-navigation/native";
import auth from '../config/firebase';
import { getAuth, signOut } from 'firebase/auth';


function ContactListScreen({ navigation, route }) {
    const [users, setUsers] = useState([]);
    const isFocused = useIsFocused();

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
    }, [isFocused]);

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
        <View style={{ flex: 1 }}>
            <View>
                <Appbar.Header style={{ backgroundColor: '#0d6efd' }}>
                    <Appbar.Content title="Lista de contatos" style={{ alignItems: 'center' }} />
                    <Appbar.Action icon={'logout'} onPress={() => {
                        signOut(auth)
                            .then(() => {
                                navigation.navigate('Login');
                            })
                            .catch((error) => {
                                console.log(error.message);
                            })
                    }} />
                </Appbar.Header>
            </View>
            <ScrollView>
                {
                    users.map((contact, i) => (
                        <Contact nome={contact.nome} telefone={contact.telefone} avatar={'../../assets/avatar.png'} email={contact.email} key={i} id={contact.id} />
                    ))
                }
            </ScrollView>
            <FAB
                icon={'plus'}
                style={styles.fab}
                onPress={() => navigation.navigate('NovoContato')}
            />
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
    fab: {
        margin: 16,
        right: 0,
        bottom: 0,
        position: 'absolute',
        backgroundColor: '#0d6efd'
    }
});

export default ContactListScreen;