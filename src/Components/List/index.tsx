import { View, Text, TouchableOpacity,StyleSheet } from "react-native"
export function List(){
  return(
  <>
        <View  style={style.box}>
      <Text style={style.title}> Listas de Tarefas </Text>
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
  
  </>
  )
}

const style = StyleSheet.create({
  tasks:{
    backgroundColor:'#99999F',
    margin: 10,
    padding: 8,
  },
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