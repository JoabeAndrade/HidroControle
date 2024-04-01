import { Text, View } from "react-native";
import { ContainerWater, GraficBack, GraficFront } from "./styles";

type TextProps = {
    text: string;
}

export function GraficWater({text}: TextProps){
    return(
        <ContainerWater>
            <Text style={{fontWeight: "bold", fontSize: 16}}>{text}</Text>
            <GraficBack>
                <GraficFront>
                    <Text style={{fontWeight: "bold"}}>300 Litros</Text>
                </GraficFront>
            </GraficBack>
        </ContainerWater>
    );
}