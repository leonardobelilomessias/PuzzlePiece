import { StatusBar,SafeAreaView, View,Text } from "react-native";
  export function Task(){
    return(
      <>
      <SafeAreaView>
        <StatusBar backgroundColor="#f8f8f8" translucent={false} />
        <View>
          <Text>
            Tarefas
          </Text>
        </View>
      </SafeAreaView>
      </>
    )
  }