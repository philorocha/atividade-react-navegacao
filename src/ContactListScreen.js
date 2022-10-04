import * as React from 'react';
import { Avatar, List, Divider, Appbar } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const ContactListScreen = ({ navigation }) => {

    const Contact = (props) => {
        return (
            <View>
                <View>
                    <List.Item
                        title={props.name}
                        description={props.phone}
                        left={() => <Avatar.Image size={90} source={{ uri: props.avatar }} />}
                        onPress={() => navigation.navigate('EditarContato', { name: props.name, phone: props.phone, email: props.email })}
                    />
                    <Divider />
                </View>
            </View>

        );
    }

    const contacts = [
        {
            name: 'Felipe Vieira da Rocha',
            phone: '81 99516-8384',
            avatar: 'https://avatars.githubusercontent.com/u/14117712?v=4',
            email: 'fvr@discente.ifpe.edu.br'
        },
        {
            name: 'Denise Evellin dos Anjos',
            phone: '81 99999-8555',
            avatar: 'https://instagram.frec6-1.fna.fbcdn.net/v/t51.2885-19/51626615_268582544033566_2555415982461943808_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.frec6-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=_VyS1QuWVIwAX9TlzbC&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT8uu6URi8haCF7BDjYj_6_5Y9lkcTkZGHxdVSjyZURljA&oe=63406FEA&_nc_sid=8fd12b',
            email: 'denise@gmail.com'
        },
        {
            name: 'Paulo César de Andrade',
            phone: '81 98888-8585',
            avatar: 'https://instagram.frec6-1.fna.fbcdn.net/v/t51.2885-19/307931315_629682218770505_6211546110802190639_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.frec6-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=M28GBQ-wA9oAX8TAGVQ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT9iKoOYT_084HM_hYQ0_5aDnnS2RkYgOA4jM3lGX4qcGw&oe=6341203C&_nc_sid=8fd12b',
            email: 'paulo@hotmail.com'
        }
    ];

    return (
        <View>
            <View>
                <Appbar.Header style={{backgroundColor: '#0d6efd'}}>
                    <Appbar.Content title="Lista de contatos" style={{alignItems: 'center'}}/>
                    <Appbar.Action icon={'plus'} onPress={() => navigation.navigate('NovoContato')} />
                </Appbar.Header>
            </View>
            {
                contacts.map((contact, i) => (
                    <Contact name={contact.name} phone={contact.phone} avatar={contact.avatar} email={contact.email} key={i} />
                ))
            }
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

export default ContactListScreen;