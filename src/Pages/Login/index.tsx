import { View,Text,Image,StyleSheet,StatusBar, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import First from '../../assets/img/puzzle.png'

export function Login(){
  return(
  <SafeAreaView>
    <View style={style.container}>
    <StatusBar  barStyle="dark-content" backgroundColor="transparent"/>
      <Text style={style.logoTitle}>Puzzle Piece</Text>
      <Image source={First}/>
      <Text style={ style.title}>Planeje, organize, crie e explore todo seu potencial.</Text>
      <TextInput style={style.input} onChange={()=>{}} placeholder="Email"/>
      <TextInput style={style.input} onChange={()=>{}} placeholder="Senha"/>
      <TouchableOpacity style={style.button} activeOpacity={0.7}>
        <Text style={style.textButton}>Entrar</Text>
      </TouchableOpacity>
      <Text>Ainda não tem um conta? Cadastre-se </Text>
    </View>
  </SafeAreaView>
  )
}
const style = StyleSheet.create({
  logoTitle:{
    fontSize:40,
    textAlign:"center",
    width: 300,
    fontFamily:"Amaranth_700Bold",
    marginTop:getStatusBarHeight() + 5,
  },
  image:{
    width: 50
  },
  container:{

    justifyContent:"center",
    alignItems:"center"
  },
  title:{
    fontSize:25,
    fontWeight:"bold",
    textAlign:"center",
    width: 300,
    marginBottom:20,
  },
  input:{
    width: 300,
    height: 50,
    borderWidth:1,
    marginBottom:5,
    marginTop:10,
    padding: 10,
  },
  button:{
    width: 300,
    height: 50,
    backgroundColor:"#4296f5",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:5,
    marginTop:10,
    marginBottom:10,
  },
  textButton:{
    color: 'white',
    fontSize:20,
    fontWeight:"bold",
  }
})