import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { View,Text } from 'react-native'
import { CreateGoal } from '../Pages/CreateGoal';
import { ShowGoal } from '../Pages/CreateGoal/ShowGoal';
import { Task } from '../Pages/CreateGoal/Task';



const {Navigator, Screen}= createNativeStackNavigator()

export function Routes(){
  return(
    <NavigationContainer>
        <Navigator   initialRouteName="ShowGoal"  >
          
          <Screen  options={{
            headerShown: false,
          }} name="Login" component={Login}/>

          <Screen name="Home" component={Home} options={{
            headerShown: false,
          }}/>

          <Screen name="CreateGoal" component={CreateGoal}options={{
            headerShown: false,
          }}/>
          <Screen name = "ShowGoal" component={ShowGoal} options={{headerShown:false}}/>

          <Screen name = "Task" component={Task} options={{headerShown:false}}/>

        </Navigator>
    </NavigationContainer>
  )
}