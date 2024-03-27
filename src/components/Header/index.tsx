import { ConatinerHeader, HeaderTitle } from "./styles";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

type HeaderProps = {
    text: string;
}

export function Header({text}: HeaderProps){
    return(
        <ConatinerHeader>
            <HeaderTitle>
                <TouchableOpacity>
                    <AntDesign name="doubleleft" size={18} color="#ffffff" style={{marginLeft: 15}}/>
                </TouchableOpacity>
                <View style={{width: "100%", alignItems: "center", justifyContent: "center", position: "absolute"}}>
                    <Text style={{fontWeight: "bold", fontSize: 16, color: "#ffffff",}}>{text}</Text>
                </View>
            </HeaderTitle>
        </ConatinerHeader>
    );
}