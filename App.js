import * as React from 'react';
import { NavigationContainer, Link } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appbar, Button, Provider as PaperProvider } from 'react-native-paper';
import LoginScreen from './src/LoginScreen';
import ContactListScreen from './src/ContactListScreen';
import AddContactScreen from './src/AddContactScreen';
import EditContactScreen from './src/EditContactScreen';
import RegisterUserScreen from './src/RegisterUserScreen'

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello from Home</Text>
      <Button
        mode='contained'
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      >Details</Button>
    </View>
  );
}

function ListaDeContatosBar({ navigation }) {
  return (
    <Appbar.Header>
      <Appbar.Content title="Lista de Contatos" />
    </Appbar.Header>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{
              headerTitle: '',
            }}
           />
          <Stack.Screen
            name='Contato'
            component={AddContactScreen}
            options={{
              headerStyle: {
                backgroundColor: '#0d6efd',
              },
              headerTitleAlign: 'center',
              headerTintColor: '#fff'
            }}
          />
          <Stack.Screen
            name='Lista de Contatos'
            component={ContactListScreen}
            options={{
              headerRight: () => {
                return (
                  <Link to={{ screen: 'Contato' }}>
                    <Appbar.Action icon="plus" color='#fff'/>
                  </Link>
                );
              },
              headerStyle: {
                backgroundColor: '#0d6efd',
              },
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen
            name='Editar Contato'
            component={EditContactScreen}
            options={{
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#0d6efd'
              },
              headerTintColor: '#fff',
              headerTitle: 'Contato'
            }}
          />
          <Stack.Screen
            name='Cadastrar Usuario'
            component={RegisterUserScreen}
            options={{
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#0d6efd'
              },
              headerTintColor: '#fff',
              headerTitle: 'Usuário'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
