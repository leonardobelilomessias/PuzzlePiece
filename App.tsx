
import { useFonts } from 'expo-font';
import {Amaranth_400Regular,Amaranth_700Bold} from '@expo-google-fonts/amaranth'
import { Inter_900Black } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading'
import { Routes } from './src/routes/auth.routes';
import { DataProvider } from './src/Context/DataContext';

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
    <DataProvider>
      <Routes/> 
    </DataProvider>
  );
}
