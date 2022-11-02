import * as React from 'react';
import { NavigationContainer, Link } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import LoginScreen from './src/screens/LoginScreen';
import ContactListScreen from './src/screens/ContactListScreen';
import AddContactScreen from './src/screens/AddContactScreen';
import EditContactScreen from './src/screens/EditContactScreen';
import RegisterUserScreen from './src/screens/RegisterUserScreen';
import FlashMessage from "react-native-flash-message";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false }}>
          <Stack.Screen 
            name='Login'
            component={LoginScreen}
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
        <FlashMessage position="top" />
      </NavigationContainer>
    </PaperProvider>
  );
}
