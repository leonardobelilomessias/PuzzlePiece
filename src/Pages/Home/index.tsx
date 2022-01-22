import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet,Text, TouchableOpacity, View ,Image} from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import {AiOutlineMenu} from 'react-icons/ai'
import { SimpleLineIcons } from '@expo/vector-icons';

export function Home(){
  const url = 'https://github.com/leonardobmessias.png'
  return(
  <>
  <SafeAreaView>
    <StatusBar backgroundColor="#f8f8f8" />
  <ScrollView alwaysBounceVertical>
    <View style={style.home}>
      <Image source={{uri:url}} style={style.avatar}></Image>
      <Text style={style.name}> Leonardo Belilo</Text>
      <TouchableOpacity style={style.icon}><SimpleLineIcons name="menu" size={24} color="black" /></TouchableOpacity>
    </View>
    
    <View  style={style.box}>
      <Text style={style.tilte}> Meus objetivos </Text>
      <ScrollView horizontal>
        <View style={style.boxScroll} >
          <View style={style.item}></View>
          <View style={style.item}></View>
          <View style={style.item}></View>
          <View style={style.item}></View>
        </View>
      </ScrollView>
    </View>

    <View  style={style.box}>
      <Text style={style.tilte}> Minhas areas </Text>
      <ScrollView horizontal>
        <View style={style.boxScroll} >
          <View style={style.item}></View>
          <View style={style.item}></View>
          <View style={style.item}></View>
          <View style={style.item}></View>
        </View>
      </ScrollView>
    </View>

    <View  style={style.box}>
      <Text style={style.tilte}> Listas de Tarefas </Text>
        <View style={style.tasks}>
          <Text>Tarefa 1</Text>
        </View>
        <View style={style.tasks}>
          <Text>Tarefa 1</Text>
        </View>
        <View style={style.tasks}>
          <Text>Tarefa 1</Text>
        </View>
        <View style={style.tasks}>
          <Text>Tarefa 1</Text>
        </View>
        <View style={style.tasks}>
          <Text>Tarefa 1</Text>
        </View>
        <View style={style.tasks}>
          <Text>Tarefa 1</Text>
        </View>
        <TouchableOpacity style={style.button}>
          <Text style={style.textButon}>Ver mais tarefas</Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
    </SafeAreaView>
  </>
  )
}

const style = StyleSheet.create({
  home:{
    marginTop:getStatusBarHeight() + 30,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    padding: 5,
    borderBottomWidth:0.5
  },
  avatar:{
    width: 50,
    height: 50,
    backgroundColor:'#99999F',
    borderRadius:50,
    marginLeft:20,
    marginRight:20,

  },
  name:{
    fontSize:20,
    fontWeight:"bold",
  },
  icon:{
    width: 50,
    height: 50,
    marginLeft:20,
    marginRight:20,
    alignItems:"center",
    justifyContent:"center"

  },
  tilte:{
    fontSize:18,
    fontWeight:"bold",
  },
  box:{
    marginTop:15
  },
  boxScroll:{
    flexDirection:"row",
  },
  item:{
    width: 150,
    height: 150,
    backgroundColor:'#028bfc7a',
    margin:10,
  },
  tasks:{
    backgroundColor:'#99999F',
    margin: 10,
    padding: 8,
  },
  button:{
    backgroundColor:"#4296f5",
    alignItems:'center',
    color: "#FFFFFF",
    padding: 20,
    margin: 10,
    borderRadius:10
  },
  textButon:{
    color: "#FFF"
  }
})