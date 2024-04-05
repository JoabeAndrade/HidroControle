import { ConatinerFooter } from "./styles";
import { TouchableOpacity } from "react-native";
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { RootStackParamList } from "../../../types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";


export function Footer(){
    const navigatorAnalysis = useNavigation<NativeStackNavigationProp<RootStackParamList,'Analysis' >>();
    const navigatorHome = useNavigation<NativeStackNavigationProp<RootStackParamList,'Home' >>();
    const navigatorProfile = useNavigation<NativeStackNavigationProp<RootStackParamList,'Profile' >>();
    return(
        <ConatinerFooter>
            
            <TouchableOpacity onPress={() => navigatorAnalysis.navigate('Analysis')}>
                <Entypo name="bar-graph" size={32} color="#ffffff" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigatorHome.navigate('Home')}>
                <Entypo name="home" size={32} color="#ffffff" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigatorProfile.navigate('Profile')}>
                <FontAwesome name="user" size={32} color="#ffffff" />
            </TouchableOpacity>
            
        </ConatinerFooter>
    );
}