import { View } from "react-native";
import { InputText, InputStyle } from "./styles";

interface InputProps{
    text: string;
    place: string;
}

export function Input({text, place}: InputProps){
    return(
        <View>
            <InputText>{text}</InputText>
            <InputStyle 
            underlineColorAndroid="transparent" 
            placeholder={place}/>
        </View>
    );
        
        
}