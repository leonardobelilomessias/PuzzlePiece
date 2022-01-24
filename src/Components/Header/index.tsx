import { View,Image,Text, TouchableOpacity ,StyleSheet } from "react-native"
import { SimpleLineIcons } from '@expo/vector-icons';
import { getStatusBarHeight } from "react-native-iphone-x-helper";


export function Header(){
  const url = 'https://github.com/leonardobmessias.png'
  return(
    <>
       <View style={style.home}>
      <Image source={{uri:url}} style={style.avatar}></Image>
      <Text style={style.name}> Leonardo Belilo</Text>
      <TouchableOpacity style={style.icon}><SimpleLineIcons name="menu" size={24} color="black" /></TouchableOpacity>
      </View>
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

})