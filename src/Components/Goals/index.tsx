import { ScrollView,Image, View, TouchableOpacity,Text,StyleSheet, ViewProps } from "react-native"
import { Card } from "../Card"
import { Ionicons } from '@expo/vector-icons';
import { dataGoals } from "../../data/goals";
import { useNavigation } from "@react-navigation/native";
export function Goals(){
  const navigation = useNavigation<any>()
  function createGoal(){
    navigation.navigate("CreateGoal")
  }

  return(
    <>
      <View  style={style.box}>
        <View style={style.titleSection}>
         <Text style={style.title}> Meus objetivos </Text>
         <View style={style.buttonsGoals}>
          <TouchableOpacity >
            <Text style={style.seeAll}>Ver Todos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={createGoal}>
            <Ionicons name="md-add-circle-outline" size={34} color="black" />
          </TouchableOpacity>
         </View>
        </View>
      <ScrollView horizontal>
        <View style={style.boxScroll} >
        {dataGoals.map(goal=>(<Card key={goal.name} name={goal.name} process={goal?.process} task={goal?.task} situation={goal?.situation} img={goal?.img}></Card>))}
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
  },
  buttonsGoals:{
    flexDirection:"row",
    marginHorizontal: 5,
    alignItems:"center",
  },
  seeAll:{
    marginHorizontal: 10,
    backgroundColor:"#4296f5",
    color:"#FFF",
    padding: 5,
    borderRadius:5,
  }
})
