import { ScrollView,Image, View, TouchableOpacity,Text,StyleSheet } from "react-native"
import { Card } from "../Card"

export function Area(){
  return(
    <>
    <View  style={style.box}>
      <Text style={style.title}> Minhas Areas </Text>
      <ScrollView horizontal>
        <View style={style.boxScroll} >
          <Card></Card>
        </View>
      </ScrollView>
    </View>
    </>
  )
}

const style = StyleSheet.create({
  title:{
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
})
