import { Text, View } from "react-native";
import { Header } from "../../components/Header";
import { ConatinerProfile } from "./styles";

export function Profile(){
    return(
        <ConatinerProfile>
            <Header text="Perfil"/>
            <View style={{flex: 1, alignItems: "center", marginTop: 40}}>
                <Text>Informações Pessoais</Text>
            </View>
        </ConatinerProfile>
        
    );
}