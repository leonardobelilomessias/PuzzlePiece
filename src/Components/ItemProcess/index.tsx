import React, { useState } from "react";
import { View, TouchableOpacity,Text,StyleSheet } from "react-native";
import { Tasksitens } from "../TasksItens";

export function ItenProcess(){
  const [showTask,setShowTask]= useState(false)
  return(
    <>
                 <TouchableOpacity style={style.BoxProcessIten} onPress={()=>setShowTask(!showTask)} activeOpacity={0.7}>
                    <Text style={style.textProcesiten}>Desenvolvimento</Text>
                 </TouchableOpacity>
              {showTask && <View >
                 <View style={style.headerTaks}>
                     <Text style={style.titleTask}>Tarefas</Text>
                     <TouchableOpacity style={style.button}>
                        <Text style={style.textButton}> Add Nova Tarefa</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={style.boxTasks}>
                      <Tasksitens></Tasksitens> 
                                 
                  </View>
              </View>}
             
    </>
  )
}

const style = StyleSheet.create({
  
  titleProcess:{
    fontSize:28,
    fontWeight:"bold"
  },
  button:{
    backgroundColor:"#4296f5",
    padding: 5,
    borderRadius:8,
  },
  textButton:{
    color: 'white',
    fontSize:14
  },
  BoxProcessIten:{
    padding: 10,
    backgroundColor:"#c1d7f1",
    marginVertical:5,
  },
  textProcesiten:{
    fontSize:20,
    fontWeight:"bold",
  },
  titleTask:{
    fontWeight:"bold",
    fontSize:14,
  },
  boxTasks:{
    marginLeft:30
  },
  headerTaks:{
    flexDirection:'row',
    alignItems:"center",
    justifyContent:'space-between',
    marginTop:5,
  }
})