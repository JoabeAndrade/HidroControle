import { Text, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header";
import { ConatinerProfile, ProfileText } from "./styles";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Footer } from "../../components/Footer";

export function Profile(){
    return(
        <ConatinerProfile>
            <Header text="Perfil"/>
            <View style={{width: 300}}>
                <View style={{justifyContent: "space-between", alignItems: "center", marginTop: 60, flexDirection: "row"}}>
                    <ProfileText>Informações Pessoais</ProfileText>
                    <TouchableOpacity>
                        <AntDesign name="caretright" size={28} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={{justifyContent: "space-between", alignItems: "center", marginTop: 40, flexDirection: "row"}}>
                    <ProfileText>Informações Residencial</ProfileText>
                    <TouchableOpacity>
                        <AntDesign name="caretright" size={28} color="black" />
                    </TouchableOpacity>

                </View>

                <View style={{justifyContent: "space-between", alignItems: "center", marginTop: 40, flexDirection: "row"}}>
                    <ProfileText>Sair</ProfileText>
                    <TouchableOpacity>
                        <Ionicons name="exit" size={32} color="black" />
                    </TouchableOpacity>

                </View>
            </View>
            <View style={{flex: 1, justifyContent: "flex-end"}}>

            </View>
            <Footer />
        </ConatinerProfile>
        
    );
}