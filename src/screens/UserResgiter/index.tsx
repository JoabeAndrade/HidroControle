import { Container, TextErrorRegister, LinearGradientRegister, InputStylesRegister, ButtonStylesRegister, ButtonTextRegister} from "./styles";
import { Alert, Image, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Title } from "../../components/Title";
import axios from "axios";
import { RootStackParamList } from "../../../types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const LogoImg = require("../../assets/Logo.png");

const schema = yup.object({
    name: yup.string().required("Informe seu nome"),
    cpf_cnpj: yup.string().min(11, "Dados inválido").max(14, "Dados inválido").required("Informe seu CPF ou CNPJ"),
    email: yup.string().email("Email inválido").required("Informe seu email"),
    password: yup.string().min(6, "A senha deve conter pelos 6 dígitos").required("Informe sua senha")
})

type FormData = {
    name: string;
    cpf_cnpj: string;
    email: string;
    password: string;
}

type NewData = FormData & {
    cpf: string;
    cnpj: string;
}

export function UserRegister(){
    const navigator = useNavigation<NativeStackNavigationProp<RootStackParamList, 'AddressRegister'>>();

    const {control, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    async function handleRegister(data: FormData, ){
        const newData = data as NewData
        newData.cpf_cnpj.length == 11 ? newData.cpf = data.cpf_cnpj : newData.cnpj = data.cpf_cnpj;

        try {
            const response = await axios.post("http://localhost:3000/api/user", 
            newData)
            alert("Logado com sucesso")
        } catch (error: any) {
            alert(error.response.data.message)
        }
    }
    return(
        <LinearGradientRegister colors={["#729ef7", "#ffffff"]}>
            <Image source={LogoImg} style={{ width: 100, height: 100}}/>
            <Container>
                <Title title="Cadastro de Usuário"/>
                <ScrollView>
                    <Controller
                        control={control}
                        name="name"
                        render={({ field: { onChange, value } }) => (
                            <InputStylesRegister
                                style={{borderWidth: errors.name && 1, borderColor: errors.name && "#ff375b"}}
                                onChangeText={onChange}
                                value={value}
                                placeholder="Digite seu nome"
                            />
                        )}
                    />
                    {errors.name && <TextErrorRegister>{errors.name?.message}</TextErrorRegister>}

                    <Controller
                        control={control}
                        name="cpf_cnpj"
                        render={({ field: { onChange, value } }) => (
                            <InputStylesRegister
                                style={{borderWidth: errors.cpf_cnpj && 1, borderColor: errors.cpf_cnpj && "#ff375b"}}
                                onChangeText={onChange}
                                value={value}
                                placeholder="Digite seu CPF ou CNPJ"
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
                                placeholder="Digite seu email"
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
                                placeholder="Digite sua senha"
                            />
                        )}
                    />
                    {errors.password && <TextErrorRegister>{errors.password?.message}</TextErrorRegister>}

                    <ButtonStylesRegister onPress={() => navigator.navigate('AddressRegister')}>
                        <ButtonTextRegister>Cadastrar</ButtonTextRegister>
                    </ButtonStylesRegister>
                </ScrollView>
            </Container>
        </LinearGradientRegister>
        
    );
}