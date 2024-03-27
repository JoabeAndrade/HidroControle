import { Header } from "../../components/Header";
import { ConatinerHomeInfo } from "./styles";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { ScrollView } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextError } from "../../components/TextErrorMessage/styles";
import { ButtonTextAddress, ButtonStylesAddress, Container, InputStylesAddress } from "../AddressRegister/styles";

const schema = yup.object({
    cep: yup.string().max(9, "CEP inválido!").required("Informe seu CEP!"),
    neighborhood: yup.string().required("Informe seu Bairro!"),
    address: yup.string().required("Informe seu endereço!"),
    complement: yup.string().required("Informe o complemento!"),
    number: yup.number().required("Informe o número do complemento!"),
    cadunico: yup.number().required("Informe o CarUnico!"),
    quant: yup.number().required("Informe a quantidade de pessoas!")
})

type FormData = {
    cep: string;
    neighborhood: string;
    address: string;
    complement: string;
    number: number;
    cadunico: number;
    quant: number;
}

export function HomeInformation(){
    const {control, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    function handleSave(data: FormData){
        console.log(data)
    }
    return(
        <ConatinerHomeInfo>
            <Header text="Informações Residencial"/>
            <Container style={{marginTop: 100}}>
                <ScrollView style={{height: 400}}>
                    <Controller
                        control={control}
                        name="cep"
                        render={({ field: { onChange, value } }) => (
                            <InputStylesAddress
                                style={{borderWidth: errors.cep && 1, borderColor: errors.cep && "#ff375b"}}
                                onChangeText={onChange}
                                value={value}
                                placeholder="CEP"
                            />
                        )}
                    />
                    {errors.cep && <TextError>{errors.cep?.message}</TextError>}

                    <Controller
                        control={control}
                        name="neighborhood"
                        render={({ field: { onChange, value } }) => (
                            <InputStylesAddress
                                style={{borderWidth: errors.neighborhood && 1, borderColor: errors.neighborhood && "#ff375b"}}
                                onChangeText={onChange}
                                value={value}
                                placeholder="Bairro"
                            />
                        )}
                    />
                    {errors.neighborhood && <TextError>{errors.neighborhood?.message}</TextError>}

                    <Controller
                        control={control}
                        name="address"
                        render={({ field: { onChange, value } }) => (
                            <InputStylesAddress
                                style={{borderWidth: errors.address && 1, borderColor: errors.address && "#ff375b"}}
                                onChangeText={onChange}
                                value={value}
                                placeholder="Endereço"
                            />
                        )}
                    />
                    {errors.address && <TextError>{errors.address?.message}</TextError>}

                    <Controller
                        control={control}
                        name="complement"
                        render={({ field: { onChange, value } }) => (
                            <InputStylesAddress 
                                style={{borderWidth: errors.complement && 1, borderColor: errors.complement && "#ff375b"}}
                                onChangeText={onChange}
                                value={value}
                                placeholder="Complemento"
                            />
                        )}
                    />
                    {errors.complement && <TextError>{errors.complement?.message}</TextError>}

                    <Controller
                        control={control}
                        name="number"
                        render={({ field: { onChange, value } }) => (
                            <InputStylesAddress
                                style={{borderWidth: errors.number && 1, borderColor: errors.number && "#ff375b"}}
                                onChangeText={onChange}
                                value={value}
                                placeholder="Número"
                            />
                        )}
                    />
                    {errors.number && <TextError>{errors.number?.message}</TextError>}

                    <Controller
                        control={control}
                        name="cadunico"
                        render={({ field: { onChange, value } }) => (
                            <InputStylesAddress
                                style={{borderWidth: errors.cadunico && 1, borderColor: errors.cadunico && "#ff375b"}}
                                onChangeText={onChange}
                                value={value}
                                placeholder="CadUnico"
                            />
                        )}
                    />
                    {errors.cadunico && <TextError>{errors.cadunico?.message}</TextError>}

                    <Controller
                        control={control}
                        name="quant"
                        render={({ field: { onChange, value } }) => (
                            <InputStylesAddress
                                style={{borderWidth: errors.quant && 1, borderColor: errors.quant && "#ff375b"}}
                                onChangeText={onChange}
                                value={value}
                                placeholder="Quantidade de moradores"
                            />
                        )}
                    />
                    {errors.quant && <TextError>{errors.quant?.message}</TextError>}
                </ScrollView>

                <ButtonStylesAddress onPress={handleSubmit(handleSave)} style={{marginTop: 50}}>
                    <ButtonTextAddress>Salvar</ButtonTextAddress>
                </ButtonStylesAddress>
            </Container>
        </ConatinerHomeInfo>
    );
}