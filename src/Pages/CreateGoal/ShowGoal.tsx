import { useState } from "react";
import { StatusBar,SafeAreaView, View,Text ,StyleSheet,Image, TouchableOpacity, TouchableOpacityComponent, Touchable, ScrollView, TextInput} from "react-native";
import ImgcreateGoal from '../../assets/img/ImgCreateGoal.png'
import { ItenProcess } from "../../Components/ItemProcess";

export function ShowGoal({name,route}:any){
  const [addProcess,setAddProces]=useState(false)
  return(
  <>
        <SafeAreaView>
          <ScrollView>
        <StatusBar backgroundColor="#f8f8f8" barStyle='dark-content' translucent={false} />
        <View style={style.container}>
          <View>
          <Text style={style.title}>
            Desenvolvimento app
          </Text>
          <Image style={style.imageGoal} source={ImgcreateGoal} />
          </View>
        <View style={style.infos}>

          <Text >
            Processos 0/0
          </Text>
          <Text>
            Tarefas 0/0
          </Text>
          <Text>
            Progresso 0%
          </Text>
        </View>

        <View style={style.process}>
           <View style={style.boxProcess}>
          <Text style={style.titleProcess}>Processos</Text>
          <TouchableOpacity style={style.button} activeOpacity={0.7} onPress={()=>setAddProces(true)}><Text style={style.textButton} >Add Processo</Text></TouchableOpacity>
        </View>

        {addProcess && <View>

          <TextInput style={style.textArea} placeholder='Digite o nome do  Novo processo'></TextInput>
          <View style={style.displayButton}>  
              <TouchableOpacity style={style.button}><Text style={style.textButton}> Salvar</Text></TouchableOpacity>
              <TouchableOpacity style={style.button} activeOpacity={0.8} onPress={()=>setAddProces(false)}><Text style={style.textButton} > Cancelar</Text></TouchableOpacity>
          </View>
        </View>}
          
            <View style={style.BoxProcessIten}>
              <Text style={style.textProcesiten}>Criar  Interface</Text>
            </View>
            <ItenProcess></ItenProcess>
        
        </View>

          



        </View>
        </ScrollView>
      </SafeAreaView>
  </>
  )
}
const style = StyleSheet.create({
  container:{
    padding: 20,
  
  },
  infos:{

    alignItems:"center"
  },
  title:{
    fontSize:30,
    textAlign:"center",
    fontWeight:"bold",
    marginVertical:10
  },
  imageGoal:{
    width: 200,
    height: 200,
    alignSelf:"center"

  },
  process:{

    marginTop:20,
    
  },
  boxProcess:{
    flexDirection:'row',
    alignItems:"center",
    justifyContent:'space-between',
    marginVertical:5
  },
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
    color: 'white'
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
  textArea:{
    borderWidth:0.5,
    fontSize:20,
    padding: 10

  },
  displayButton:{
    flexDirection:'row',
    margin:8,
  }
})

