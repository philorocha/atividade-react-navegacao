import * as React from 'react';
import { NavigationContainer, Link } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appbar, Provider as PaperProvider } from 'react-native-paper';
import LoginScreen from './src/LoginScreen';
import ContactListScreen from './src/ContactListScreen';
import AddContactScreen from './src/AddContactScreen';
import EditContactScreen from './src/EditContactScreen';
import RegisterUserScreen from './src/RegisterUserScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false }}>
          <Stack.Screen 
            name='Login'
            component={LoginScreen}
            options={{
              headerTitle: '',
            }}
           />
          <Stack.Screen
            name='NovoContato'
            component={AddContactScreen}
          />
          <Stack.Screen
            name='ListaContatos'
            component={ContactListScreen}
          />
          <Stack.Screen
            name='EditarContato'
            component={EditContactScreen}
          />
          <Stack.Screen
            name='CadastrarUsuario'
            component={RegisterUserScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
