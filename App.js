import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import Routes from './src/Routes';
import 'react-native-gesture-handler';

export default function App(){
return(
    <NavigationContainer>
         <Routes />
    </NavigationContainer>
)
}
