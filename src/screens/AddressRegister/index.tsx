import { Image } from "react-native";
import { ContainerAddress, InputStylesAddress, InputTitleAddress } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

const ImgLogo = require("../../assets/Logo.png");

export function AddressRegister(){
    return(
        <ContainerAddress colors={["#729ef7", "#ffffff"]}>
            <Image source={ImgLogo} style={{ width: 120, height: 120 }} />
            <InputStylesAddress>
                <InputTitleAddress>Cadastro de Endereço</InputTitleAddress>
                <Input text="CEP" place=""/>
                <Input text="Bairro" place=""/>
                <Input text="Rua" place=""/>
                <Input text="Complemento" place=""/>
            </InputStylesAddress>
            <Button text="Avançar"/>
        </ContainerAddress>
    );
}