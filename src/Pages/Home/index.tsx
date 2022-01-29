import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, View, ViewProps} from "react-native";
import { Goals } from "../../Components/Goals";
import { Header } from "../../Components/Header";
import { Area } from "../../Components/Area";
import { List } from "../../Components/List";
export function Home(){
  return(
  <>
    <SafeAreaView>
      <StatusBar backgroundColor="#f8f8f8" />
      <ScrollView alwaysBounceVertical>
          <Header></Header>
          <Goals ></Goals>
{/*           <Area></Area> */}
          <List></List>
      </ScrollView>
    </SafeAreaView>
  </>
  )
}
