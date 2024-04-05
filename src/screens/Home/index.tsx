import { ContainerHome, TitleHome, ButtonAccount, DashBoard, GraficFrontWater, GraficBackWater } from "./styles";
import { Footer } from "../../components/Footer";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Title } from "../../components/Title";
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/navigation";
const LogoImg = require("../../assets/Logo.png");
const Symbol = require("../../assets/material-symbols_water-green.png");

export function Home(){
    const navigator = useNavigation<NativeStackNavigationProp<RootStackParamList,'PaymentHistory' >>();
    const navigatorAnalysis = useNavigation<NativeStackNavigationProp<RootStackParamList,'Analysis' >>();
    return(
        <ContainerHome>
            <TitleHome>
                <Image source={LogoImg} style={{width: 50, height: 50}}/>
                <Title title="Hidro Controle"/>
            </TitleHome>
            <DashBoard>
                <ButtonAccount onPress={() => navigator.navigate('PaymentHistory')}>
                    <Text style={{paddingLeft: 10, fontWeight: "bold", fontSize: 14}}>Fevereiro</Text>
                    <View style={{flexDirection: "row", gap: 10, alignItems: "center", justifyContent: "center", marginTop: 15}}>
                        <Text style={{fontWeight: "bold", fontSize: 18}}>R$ 154,65</Text>
                        <MaterialIcons name="monetization-on" size={24} color="#74D778" />
                    </View>
                    <Text style={{paddingLeft: 10, fontWeight: "bold", marginTop: 20, fontSize: 12}}>Vence em 8 dias</Text>
                </ButtonAccount>
            </DashBoard>

            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 40}}>
                <Image source={Symbol} style={{width: 80, height: 60}}/>
                <View>
                    <Text style={{fontSize: 24, color: "#4476D9"}}>26<Text style={{fontSize: 16}}> Litros</Text></Text>
                    <Text style={{fontSize: 18, color: "#4476D9"}}>Consumidos</Text>
                </View>
            </View>

            <View style={{alignItems: "center"}}>
                <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 80, width: 320}}>
                    <Text>Último seis meses</Text>
                    <TouchableOpacity style={{flexDirection: "row", alignItems: "center"}} onPress={() => navigatorAnalysis.navigate('Analysis')}>
                        <Text>Ver mais</Text>
                        <AntDesign name="right" size={16} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={{alignItems: "center", marginTop: 5}}>
                <View style={{backgroundColor: "#ffffff", width: 320, height: 190}}>
                    <View style={{alignItems: "center", flex: 1, justifyContent: "center", flexDirection:"row"}}>
                        <View style={{flexDirection: "row", gap: 20}}>
                            <View>
                                <GraficBackWater>
                                    <GraficFrontWater style={{height: 80}}/>
                                </GraficBackWater>
                                <Text>JAN</Text>
                            </View>

                            <View>
                                <GraficBackWater>
                                    <GraficFrontWater style={{height: 80}}/>
                                </GraficBackWater>
                                <Text>FEV</Text>
                            </View>

                            <View>
                                <GraficBackWater>
                                    <GraficFrontWater style={{height: 80}}/>
                                </GraficBackWater>
                                <Text>MAR</Text>
                            </View>

                            <View>
                                <GraficBackWater>
                                    <GraficFrontWater style={{height: 80}}/>
                                </GraficBackWater>
                                <Text>ABR</Text>
                            </View>

                            <View>
                                <GraficBackWater>
                                    <GraficFrontWater style={{height: 80}}/>
                                </GraficBackWater>
                                <Text>MAI</Text>
                            </View>

                            <View>
                                <GraficBackWater>
                                    <GraficFrontWater style={{height: 80}}/>
                                </GraficBackWater>
                                <Text>JUN</Text>
                            </View>
                        
                        </View>
                        
                    </View>
                </View>
            </View>
            
            <View>
                
            </View>
 
            <View style={{justifyContent: "flex-end", flex: 1}}>
                <Footer/>
            </View>
        </ContainerHome>
    );
}