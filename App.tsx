
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import { Home } from './src/Pages/Home';
import {Login} from './src/Pages/Login'
import { useFonts } from 'expo-font';
import {Amaranth_400Regular,Amaranth_700Bold} from '@expo-google-fonts/amaranth'
import { Inter_900Black } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading'
import { Routes } from './src/routes/auth.routes';



export default function App() {
  const [fontsLoad] = useFonts({
    Amaranth_400Regular,
    Amaranth_700Bold,
    Inter_900Black
  })
  if(!fontsLoad){
    return(
      <AppLoading/>
    )
  }
  return (

      <Routes/> 
    
  );
}

const style = StyleSheet.create({
  font:{
    fontFamily:'Amaranth_400Regular',
    fontSize:30
  }
})