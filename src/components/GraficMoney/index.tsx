import { Text, View } from "react-native";
import { ContainerMoney, Grafic } from "./styles";

type TextProps = {
    text: string;
}

export function GraficMoney({text}: TextProps){
    return(
        <ContainerMoney>
            <Text style={{fontWeight: "bold", fontSize: 16}}>{text}</Text>
            <Grafic>
                <Text style={{fontWeight: "bold"}}>R$ 150</Text>
            </Grafic>
        </ContainerMoney>
    );
}