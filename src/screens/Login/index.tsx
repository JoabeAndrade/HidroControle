import { Container } from "./styles";
import { useForm, Controller } from "react-hook-form";
import { InputStylesLogin, ViewRegister, TextRegister, ButtonStylesLogin, ButtonTextLogin, TextErrorLogin, LinearGradientLogin, ButtonTextForgets, ButtonStylesForgets } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Text, TouchableOpacity, Image } from "react-native";
import { Title } from "../../components/Title";

const LogoImg = require("../../assets/Logo.png");
const schema = yup.object({
    email: yup.string().email("Email Inválido").required("Informe seu email"),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 dígitos").required("Informe sua senha")
})

type FormData = {
    email: string;
    password: string;
}

export function Login(){
    const {control, handleSubmit, formState: { errors }} = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    function handleSignIn(data: FormData){
        console.log(data)
    }
    return(
        <LinearGradientLogin colors={["#729ef7", "#ffffff"]}>
            <Image source={LogoImg} style={{ width: 100, height: 100}}/>
            <Title title="Bem Vindo(a)"/>
            <Container>
                <Controller 
                    control={control}
                    name="email"
                    render={({ field: { onChange, value } }) => (
                        <InputStylesLogin
                            style={{borderWidth: errors.email && 1, borderColor: errors.email && "#ff375b"}}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Email"
                        />
                    )}
                />
                {errors.email && <TextErrorLogin>{errors.email?.message}</TextErrorLogin>}

                <Controller 
                    control={control}
                    name="password"
                    render={({ field: { onChange, value } }) => (
                        <InputStylesLogin
                            style={{borderWidth: errors.password && 1, borderColor: errors.password && "#ff375b"}}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Senha"
                            secureTextEntry
                        />
                    )}
                />
                {errors.password && <TextErrorLogin>{errors.password?.message}</TextErrorLogin>}

                <ButtonStylesForgets>
                    <ButtonTextForgets>Esqueci minha senha</ButtonTextForgets>
                </ButtonStylesForgets>

                <ButtonStylesLogin onPress={handleSubmit(handleSignIn)}>
                    <ButtonTextLogin>Entrar</ButtonTextLogin>
                </ButtonStylesLogin>
                
                <ViewRegister>
                    <Text>Ainda não possui cadastro ?</Text>
                    <TouchableOpacity>
                        <TextRegister>
                            Cadastre - se
                        </TextRegister>
                    </TouchableOpacity>
                </ViewRegister>
                
            </Container>
        </LinearGradientLogin>
        
    );
}

