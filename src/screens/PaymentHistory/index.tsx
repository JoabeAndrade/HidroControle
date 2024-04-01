import { ScrollView } from "react-native";
import { Dropdown } from "../../components/Dropdown";
import { GraficWater } from "../../components/GraficWater";
import { Header } from "../../components/Header";
import { ContainerPayment, ContainerStylesPayment} from "./styles";
import { GraficMoney } from "../../components/GraficMoney";

export function PaymentHistory(){
    return(
        <ContainerPayment>
            <Header text="Histórico de Pagamento"/>
            <ContainerStylesPayment>
                <Dropdown />
                <ScrollView style={{height: 600, marginTop: 20}}>
                    <GraficMoney text="Janeiro"/>
                    <GraficMoney text="Fevereiro"/>
                    <GraficMoney text="Março"/>
                    <GraficMoney text="Abril"/>
                    <GraficMoney text="Maio"/>
                    <GraficMoney text="Junho"/>
                    <GraficMoney text="Julho"/>
                    <GraficMoney text="Agosto"/>
                    <GraficMoney text="Setembro"/>
                    <GraficMoney text="Outubro"/>
                    <GraficMoney text="Novembro"/>
                    <GraficMoney text="Dezembro"/>
                </ScrollView>
                
            </ContainerStylesPayment>
           
        </ContainerPayment>
       
    );
}