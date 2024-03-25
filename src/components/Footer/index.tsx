import { ConatinerFooter } from "./styles";
import { TouchableOpacity } from "react-native";
import { FontAwesome, Entypo } from '@expo/vector-icons';


export function Footer(){
    return(
        <ConatinerFooter>
            
            <TouchableOpacity>
                <Entypo name="bar-graph" size={32} color="#ffffff" />
            </TouchableOpacity>
            
            <TouchableOpacity>
                <Entypo name="home" size={32} color="#ffffff" />
            </TouchableOpacity>
            
            <TouchableOpacity>
                <FontAwesome name="user" size={32} color="#ffffff" />
            </TouchableOpacity>
            
        </ConatinerFooter>
    );
}