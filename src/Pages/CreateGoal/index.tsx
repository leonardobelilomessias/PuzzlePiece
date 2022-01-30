import { useNavigationState } from "@react-navigation/native"
import { useState } from "react"
import { SafeAreaView,ScrollView,StatusBar, View,Text, TextInput, StyleSheet ,TouchableOpacity,Image,KeyboardAvoidingView} from "react-native"
import ImgcreateGoal from '../../assets/img/ImgCreateGoal.png'
import { Input } from "../../Components/Input"
import { Goal } from "../../controller/Goal.controller"
import {useNavigation} from '@react-navigation/native'

type GoalProps={
  name:string
  date:string
  createAt:string
  task:string[]
  amountTask:number
  process:string[]
  amountProcess:number
  img:string
}

export function CreateGoal(){
  const navigation = useNavigation<any>()

  const [nameGoal,setNameGoal]=useState('')
  const [resp,useResp] = useState(false)
  function handleRespYes(){
    useResp(true)
  }
  function handleRespNo(){
    useResp(false)
  }
  const itens:GoalProps = {name:'test',date:'',createAt:'',task:[''],amountTask:0,process:[''],amountProcess:0,img:''}
  const newGoal = new Goal(itens)
  function NextShowGoal(){
    navigation.navigate('ShowGoal',{name:'leonardo'})

  }
  return(
    <>
    <SafeAreaView>
      <KeyboardAvoidingView style={style.kaypad}
      >
      <StatusBar backgroundColor="#f8f8f8" translucent={false} />
      <ScrollView alwaysBounceVertical >
        <View style={style.container}>
          <Text style={style.title}>Criar Objetivo</Text>

          <Image style={style.imageGoal} source={ImgcreateGoal} />
          <Text>Essa é a hora de você pensar em como você pode estruturar o seu objetivo.
          Vamos fazer da seguinte forma. Vamos criar um objetivo claro e bem definido. Depois vamos para as proximas etapas aonde vamos definir os processos e as Tarefaz. Então seus objetivos vão ficar da seguinte forma: Objetivo {'>'} processos {'>'} Tarefas.
          um exemplo: objetivo perder 15 kilo. Meus processos comer de 3 em 3 horas
          </Text>
          <Text style={style.subtitle}>Nome</Text>
          <Input defaultValue={nameGoal} onChangeText={newText=>{setNameGoal(newText)}}>
          </Input>
          <Text style={style.subtitle}>Data Estimada</Text>
          <View style={style.selectRadios}>
            <TouchableOpacity onPress={handleRespYes}>
                <View style={style.containerRadio}>
                  <View style={resp == true ? style.radio:false}></View>
                </View>
              <Text> Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRespNo}>
            <View style={style.containerRadio}>
                  <View style={resp == false ? style.radio:false}></View>
                </View>
              <Text> Não</Text>
            </TouchableOpacity>
          </View>
          { resp && 
          <View> 
            <Text style={style.subtitle}>dd/mm/aaaa</Text>
            <Input></Input>
          </View>}
          <View> 
            <Text style={style.subtitle}>Numero de Processos</Text>
            <Input></Input>
          </View>
        </View>
            <TouchableOpacity onPress={NextShowGoal} style={style.button}>
              <Text style={style.textButton}> Proximo </Text>
            </TouchableOpacity>

      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  </>
  )
}
const style = StyleSheet.create({
  container:{
    padding: 20,
  
    
  },
  title:{
    fontSize:38,
    marginHorizontal:'auto',
    alignSelf:"center",
    margin: 15,
    fontWeight:"bold"
  },
  subtitle:{
    fontSize:20,
    margin: 10,
    fontWeight:'bold'
  },
  selectRadios:{
    flexDirection: "row"
    },
    containerRadio:{
      width: 28,
      height: 28,
      marginHorizontal:15,
      borderRadius:28,
      borderWidth:1,
      alignItems:"center",
      justifyContent:"center"
    },
  radio:{
    backgroundColor:"#4296f5",
    width: 20,
    height: 20,
    borderRadius:20,

  }, 

  imageGoal:{
    width: 200,
    height: 200,
    alignSelf:"center"
  },
  button:{
    backgroundColor:"#4296f5",
    marginHorizontal:40,
    padding:20,
    alignItems:"center",
    borderRadius:8,
    marginBottom:10
  },
  textButton:{
    color:'white'

  },
  kaypad:{
    padding:0
  }
})