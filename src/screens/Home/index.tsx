import { View } from "react-native";
import { Footer } from "../../components/Footer";

export function Home(){
    return(
        <View style={{flex: 1, width: "100%", alignSelf: "flex-end"}}>
            <Footer/>
        </View>
    );
}