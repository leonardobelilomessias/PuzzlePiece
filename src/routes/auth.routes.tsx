import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { View,Text } from 'react-native'

const {Navigator, Screen}= createNativeStackNavigator()

export function Routes(){
  return(
    <NavigationContainer>
        <Navigator   initialRouteName="Login"  >
          <Screen  options={{
            headerShown: false,
          }} name="Login" component={Login}/>
          <Screen name="Home" component={Home} options={{
            headerShown: false,
          }}/>
        </Navigator>
    </NavigationContainer>
  )
}