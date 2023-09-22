import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import  Login  from '../components/login'
import  BemVindo  from '../components/bemvindo'
import { Header } from 'react-native/Libraries/NewAppScreen';



const Stack = createNativeStackNavigator();


export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='BemVindo' component={BemVindo} options={{HeaderShow: false}}></Stack.Screen>
            <Stack.Screen name='Login' component={Login} options={{HeaderShow: false}} ></Stack.Screen >
        </Stack.Navigator>
    );
}

