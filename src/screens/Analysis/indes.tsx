import { ScrollView } from "react-native";
import { Dropdown } from "../../components/Dropdown";
import { GraficWater } from "../../components/GraficWater";
import { Header } from "../../components/Header";
import { ContainerAnalysis, ContainerStylesAnalysis} from "./styles";

export function Analysis(){
    return(
        <ContainerAnalysis>
            <Header text="Análise"/>
            <ContainerStylesAnalysis>
                <Dropdown />
                <ScrollView style={{height: 600, marginTop: 20}}>
                    <GraficWater text="Janeiro"/>
                    <GraficWater text="Fevereiro"/>
                    <GraficWater text="Março"/>
                    <GraficWater text="Abril"/>
                    <GraficWater text="Maio"/>
                    <GraficWater text="Junho"/>
                    <GraficWater text="Julho"/>
                    <GraficWater text="Agosto"/>
                    <GraficWater text="Setembro"/>
                    <GraficWater text="Outubro"/>
                    <GraficWater text="Novembro"/>
                    <GraficWater text="Dezembro"/>
                </ScrollView>
                
            </ContainerStylesAnalysis>
           
        </ContainerAnalysis>
       
    );
}