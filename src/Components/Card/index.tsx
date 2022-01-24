import { useContext } from "react"
import { View,StyleSheet, Text,Image, ImageBackground, ViewProps } from "react-native"
import { MyContext } from "../../Context/DataContext"

type Props = ViewProps &{
  name:string
  process:number
  task:number
  situation:string
  img:string
}
export function Card({name,process,task,situation,img,...rest}:Props){
  const url = 'https://github.com/leonardobmessias.png'
  return(
  <>
          <View style={style.item}>
            <View style={style.topCard}>
              <Text style={situation==="pendding"? style.situationpending:style.situationReady}>
                {situation=== "pendding"?"Pendente":"Concluido" }
              </Text>
              <Text style={style.data}>67%</Text>
            </View>
            <ImageBackground source={{uri:img ? img : url}} style={style.image}></ImageBackground>
            <Text style={style.titleCard}>{name}</Text>
            <View style={style.bottomCard}>
              <Text>Processos</Text>
              <Text style={style.data}>{process}</Text>
            </View>
            <View style={style.bottomCard}>
              <Text>Tarefas</Text>
              <Text style={style.data}>{task}</Text>
            </View>
          </View>

  </>
  )
}
const style = StyleSheet.create({

  item:{
    width: 200,
    height: 205,
    backgroundColor:'#f5f5f579',
    margin:10,
    borderWidth:0.3,
    borderRadius:5,

  },
  image:{
    width: 198,
    height: 100
  },
  topCard:{
    flexDirection:"row",
    justifyContent:"space-between",
    padding: 5,
  },
  bottomCard:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginHorizontal:5,
    
  },
  titleCard:{
    fontSize:14,
    fontWeight:"bold",
    marginLeft:5,
  },
  data:{
    color: "gray"
  },
  situationpending:{
    color: "#FA5656",
    fontWeight:"bold"
  },
  situationReady:{
    color: "#1ec907",
    fontWeight:"bold"
  }

})