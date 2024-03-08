import { Container, ImageLogo } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Image } from "react-native";

const LogoImg = require("../../assets/Logo.png");

export function Login(){
    return(
        <Container colors={["#4476D9", "#ffffff"]}>
            <ImageLogo source={LogoImg}/>
            <Input text="CPF/CNPJ"/>
            <Input text="SENHA"/>
            <Button text="Entrar"/>
        </Container>
        
    );
}

