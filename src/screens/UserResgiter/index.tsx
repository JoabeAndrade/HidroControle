import { Input } from "../../components/Input";
import { Container } from "./styles";
import { Image } from "react-native";

const LogoImg = require("../../assets/Logo.png");

export function UserRegister(){
    return(
        <Container colors={["#729ef7", "#ffffff"]}>
            <Image source={LogoImg}/>
            <Input text="Nome do titular"/>
            <Input text="CPF/CNPJ"/>
            <Input text="Data de Nascimento"/>
            <Input text="Email"/>
            <Input text="Senha"/>
        </Container>
    );
}