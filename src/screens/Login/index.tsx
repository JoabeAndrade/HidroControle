import { Container, ImageLogo, ButtonSenhaText, ButtonSenha, ButtonCadastroText, ButtonCadastro, ButtonExemplo } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Text, TouchableOpacity, View } from "react-native";

const LogoImg = require("../../assets/Logo.png");

export function Login(){
    return(
        <Container colors={["#729ef7", "#ffffff"]}>
            <ImageLogo source={LogoImg}/>
            <Input text="CPF/CNPJ" place="XXX.XXX.XXX-XX" type="numeric"/>
            <Input text="SENHA"/>

            <ButtonSenha>
                <TouchableOpacity>
                    <ButtonSenhaText>Esqueci minha senha</ButtonSenhaText>
                </TouchableOpacity>
            </ButtonSenha>
            
            <Button text="Entrar"/>
            <ButtonCadastro>
                <Text>Não possui uma conta ?
                    <TouchableOpacity>
                        <ButtonCadastroText>Cadastre - se</ButtonCadastroText>
                    </TouchableOpacity>
                </Text>
            </ButtonCadastro>
        </Container>
        
    );
}

