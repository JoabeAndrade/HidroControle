import { View } from "react-native";
import { InputText, InputStyle } from "./styles";

interface InputProps{
    text: string;
    place: string;
    type: string;
}

export function Input({text, place, type}: InputProps){
    return(
        <View>
            <InputText>{text}</InputText>
            <InputStyle 
            underlineColorAndroid="transparent" 
            placeholder={place}
            keyboardType={type}/>
        </View>
    );
        
        
}