import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, InputStyles, InputTitle } from "./styles";
import { Image } from "react-native";

const LogoImg = require("../../assets/Logo.png");

export function UserRegister(){
    return(
        <Container colors={["#729ef7", "#ffffff"]}>
            <Image source={LogoImg} style={{ width: 120, height: 120}}/>
            <InputStyles>
                <InputTitle>Cadastro de Usuário</InputTitle>
                <Input text="Nome do titular" place=""/>
                <Input text="CPF/CNPJ" place="XXX.XXX.XXX-XX"/>
                <Input text="Email" place="seuemail@gmail.com"/>
                <Input text="Senha" place=""/>
            </InputStyles>
            <Button text="Cadastrar"/>
        </Container>
    );
}