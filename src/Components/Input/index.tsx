import { InputHTMLAttributes } from "react";
import { TextInput ,TextInputProps,StyleSheet} from "react-native";

export function Input({...rest}:TextInputProps){
  return(
    <TextInput
    style={style.container}
    {...rest}
    ></TextInput>
  )
}
const style = StyleSheet.create({
  container:{
    
    borderRadius:8,
    marginHorizontal:20,
    borderColor:"#706f6f",
    borderWidth:0.5,
    padding: 10,
  }
})