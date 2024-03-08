import { View } from "react-native";
import { InputText, InputStyle } from "./styles";

interface InputProps{
    text: string;
}

export function Input({text}: InputProps){
    return(
        <View>
            <InputText>{text}</InputText>
            <InputStyle/>
        </View>
    );
        
        
}