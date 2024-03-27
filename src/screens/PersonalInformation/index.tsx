import { Header } from "../../components/Header";
import { ConatinerpPrsonalInfo } from "./styles";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./styles"
import { TextErrorRegister, InputStylesRegister, ButtonStylesRegister, ButtonTextRegister} from "../UserResgiter/styles";

const schema = yup.object({
    username: yup.string().required("Informe seu nome"),
    cpf_cnpj: yup.string().min(11, "Dados inválido").max(14, "Dados inválido").required("Informe seu CPF ou CNPJ"),
    email: yup.string().email("Email inválido").required("Informe seu email"),
    password: yup.string().min(6, "A senha deve conter pelos 6 dígitos").required("Informe sua senha")
})

type FormData = {
    username: string;
    cpf_cnpj: string;
    email: string;
    password: string;
}

export function PersonalInformation(){
    const {control, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    function handleSave(data: FormData){
        console.log(data);
    }

    return(
        <ConatinerpPrsonalInfo>
            <Header text="Informações Pessoais"/>
            <Container>
                <Controller
                    control={control}
                    name="username"
                    render={({ field: { onChange, value } }) => (
                        <InputStylesRegister
                            style={{borderWidth: errors.username && 1, borderColor: errors.username && "#ff375b"}}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Nome completo"
                        />
                    )}
                />
                {errors.username && <TextErrorRegister>{errors.username?.message}</TextErrorRegister>}
                <Controller
                    control={control}
                    name="cpf_cnpj"
                    render={({ field: { onChange, value } }) => (
                        <InputStylesRegister
                            style={{borderWidth: errors.cpf_cnpj && 1, borderColor: errors.cpf_cnpj && "#ff375b"}}
                            onChangeText={onChange}
                            value={value}
                            placeholder="CPF/CNPJ"
                        />
                    )}
                />
                {errors.cpf_cnpj && <TextErrorRegister>{errors.cpf_cnpj?.message}</TextErrorRegister>}
                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, value } }) => (
                        <InputStylesRegister
                            style={{borderWidth: errors.email && 1, borderColor: errors.email && "#ff375b"}}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Email"
                        />
                    )}
                />
                {errors.email && <TextErrorRegister>{errors.email?.message}</TextErrorRegister>}
                <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, value } }) => (
                        <InputStylesRegister
                            style={{borderWidth: errors.password && 1, borderColor: errors.password && "#ff375b"}}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Senha"
                        />
                    )}
                />
                {errors.password && <TextErrorRegister>{errors.password?.message}</TextErrorRegister>}
                <ButtonStylesRegister onPress={handleSubmit(handleSave)} style={{marginTop: 100}}>
                    <ButtonTextRegister>Salvar</ButtonTextRegister>
                </ButtonStylesRegister>
            </Container>
        </ConatinerpPrsonalInfo>
    );
}