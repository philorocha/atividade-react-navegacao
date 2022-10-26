import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from "firebase/auth/react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
    apiKey: "AIzaSyBm73dJvOWNFgp40gFX1HWdnm1FpUq8TXc",
    authDomain: "atividade-firebase-68c7e.firebaseapp.com",
    projectId: "atividade-firebase-68c7e",
    storageBucket: "atividade-firebase-68c7e.appspot.com",
    messagingSenderId: "259507196092",
    appId: "1:259507196092:web:9889a8c7cbcc9924a440b9"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export default auth;