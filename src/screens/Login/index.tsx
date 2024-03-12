import { Container, ImageLogo, ButtonSenhaText, ButtonSenha, ButtonCadastroText, ButtonCadastro } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Text, TouchableOpacity, View } from "react-native";

const LogoImg = require("../../assets/Logo.png");

export function Login(){
    return(
        <Container colors={["#729ef7", "#ffffff"]}>
            <ImageLogo source={LogoImg} style={{ width: 120, height: 120}}/>
            <Input text="CPF/CNPJ" place="XXX.XXX.XXX-XX"/>
            <Input text="SENHA" place=""/>

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

