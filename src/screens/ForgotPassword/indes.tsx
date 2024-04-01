import { Header } from "../../components/Header";
import { ContainerForgotPassword, LinearGradientPassword, TextPassword } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { ButtonStylesRegister, ButtonTextRegister, InputStylesRegister, TextErrorRegister } from "../UserResgiter/styles";
import { Title } from "../../components/Title";


const schema = yup.object({
    email: yup.string().email("Email Inválido").required("Informe seu email"),
})

type FormData = {
    email: string;
}

export function ForgotPassword(){
    const {control, handleSubmit, formState: { errors }} = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    function handleSendEmail(data: FormData){
        console.log(data);
    }

    return(
        <LinearGradientPassword colors={["#729ef7", "#ffffff"]}>
            <ContainerForgotPassword>
                <Title title="Esqueceu sua senha?"/>
                <TextPassword>Enviaremos um e-mail com instruções de como redefinir sua senha.</TextPassword>
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, value } }) => (
                        <InputStylesRegister
                            style={{borderWidth: errors.email && 1, borderColor: errors.email && "#ff375b"}}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Digite seu email"
                        />
                    )}
                />
                    {errors.email && <TextErrorRegister>{errors.email?.message}</TextErrorRegister>}

                <ButtonStylesRegister onPress={handleSubmit(handleSendEmail)}>
                    <ButtonTextRegister>Enviar</ButtonTextRegister>
                </ButtonStylesRegister>
            </ContainerForgotPassword>
        </LinearGradientPassword>
    );
}