import { ScrollView,Image, View, TouchableOpacity,Text,StyleSheet, ViewProps } from "react-native"
import { Card } from "../Card"
import { Ionicons } from '@expo/vector-icons';
import { dataGoals } from "../../data/goals";
export function Goals(){

  return(
    <>
      <View  style={style.box}>
        <View style={style.titleSection}>
         <Text style={style.title}> Meus objetivos </Text>
         <Ionicons name="md-add-circle-outline" size={34} color="black" />
        </View>
      <ScrollView horizontal>
        <View style={style.boxScroll} >
        {dataGoals.map(goal=>(<Card key={goal.name} name={goal.name} process={goal.process} task={goal.task} situation={goal.situation} img={goal.img}></Card>))}
        </View>
      </ScrollView>
    </View>
    <View>
     
    </View>
    </>
  )
}

const style = StyleSheet.create({
  title:{
    fontSize:24,
    fontWeight:"bold",
  },
  box:{
    marginTop:15
  },
  boxScroll:{
    flexDirection:"row",
  },
  titleSection:{
    flexDirection:"row",
    justifyContent:"space-between"
  }
})
