import { ContainerHome, TitleHome, ButtonAccount, DashBoard } from "./styles";
import { Footer } from "../../components/Footer";
import { Image, Text, View } from "react-native";
import { Title } from "../../components/Title";
import { MaterialIcons } from '@expo/vector-icons';

const LogoImg = require("../../assets/Logo.png");
const Symbol = require("../../assets/material-symbols_water-green.png");

export function Home(){
    return(
        <ContainerHome>
            <TitleHome>
                <Image source={LogoImg} style={{width: 50, height: 50}}/>
                <Title title="Hidro Controle"/>
            </TitleHome>
            <DashBoard>
                <ButtonAccount>
                    <Text style={{paddingLeft: 10, fontWeight: "bold", fontSize: 14}}>Fevereiro</Text>
                    <View style={{flexDirection: "row", gap: 10, alignItems: "center", justifyContent: "center", marginTop: 15}}>
                        <Text style={{fontWeight: "bold", fontSize: 18}}>R$ 154,65</Text>
                        <MaterialIcons name="monetization-on" size={24} color="#74D778" />
                    </View>
                    <Text style={{paddingLeft: 10, fontWeight: "bold", marginTop: 20, fontSize: 12}}>Vence em 8 dias</Text>
                </ButtonAccount>
            </DashBoard>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 25}}>
                <Image source={Symbol} style={{width: 60, height: 60}}/>
                <View>
                    <Text style={{fontSize: 24, color: "#4476D9"}}>26<Text style={{fontSize: 16}}> Litros</Text></Text>
                    <Text style={{fontSize: 18, color: "#4476D9"}}>Consumidos</Text>
                </View>
            </View>
            <View style={{justifyContent: "flex-end", flex: 1}}>
                <Footer/>
            </View>
        </ContainerHome>
    );
}