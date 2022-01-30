import React, { useState } from "react";
import { View, TouchableOpacity,Text,StyleSheet, Touchable } from "react-native";

export function Tasksitens(){
  const [showInfoTask,setShowInfoTask]=useState(false)
  return(
    <>
        <TouchableOpacity style={style.BoxTaskIten} onPress={()=>setShowInfoTask(!showInfoTask)} activeOpacity={0.7}>
          <Text style={style.textTaskiten}>Criar Projeto React</Text>
        </TouchableOpacity>
        {showInfoTask && <View>
              <View style={style.taskDescption}>
                  <Text>Criar Projeto com um create React app. utilizar Typescript no projeto</Text>
              </View>
            <View  style={style.innerTask}>
              <TouchableOpacity style={style.button}>
              <Text style={style.textButton}>Editar Tarefa</Text>
              </TouchableOpacity>     
              <TouchableOpacity style={style.button}>
                <Text style={style.textButton}>Excluir tarefa</Text>
              </TouchableOpacity>                       
          </View>
        </View>}
    </>
  )
}

const style = StyleSheet.create({
  

  button:{
    backgroundColor:"#4296f5",
    padding: 5,
    borderRadius:8,
    marginHorizontal:5,
  },
  textButton:{
    color: 'white'
  },
  BoxTaskIten:{
    padding: 10,
    backgroundColor:"#c1d7f1",
    marginVertical:5,
  },
  textTaskiten:{
    fontSize:16,
    textAlign:"center",
    fontWeight:"bold",
  },
  innerTask:{
    flexDirection:"row",
    alignItems:'flex-end',
    justifyContent:'flex-end',

  },
  taskDescption:{
    padding: 5
  }

})