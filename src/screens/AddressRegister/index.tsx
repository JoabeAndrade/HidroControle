import { Image, ScrollView } from "react-native";
import { LinearGradientAddress, Container, InputStylesAddress } from "./styles";
import { Title } from "../../components/Title";
import { useForm, Controller } from "react-hook-form";

const ImgLogo = require("../../assets/Logo.png");

export function AddressRegister(){
    const {control, handleSubmit, formState: {errors}} = useForm({})
    return(
        <LinearGradientAddress colors={["#729ef7", "#ffffff"]}>
            <Image source={ImgLogo} style={{ width: 100, height: 100 }} />
            <Title title="Cadastro de Endereço"/>
            <Container>
                <ScrollView>
                    <Controller
                        control={control}
                        name="cep"
                        render={({ field: { onChange, value } }) => (
                            <InputStylesAddress 
                                onChangeText={onChange}
                                value={value}
                                placeholder="Informe seu CEP"
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="cep"
                        render={({ field: { onChange, value } }) => (
                            <InputStylesAddress 
                                onChangeText={onChange}
                                value={value}
                                placeholder="Informe seu CEP"
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="cep"
                        render={({ field: { onChange, value } }) => (
                            <InputStylesAddress 
                                onChangeText={onChange}
                                value={value}
                                placeholder="Informe seu CEP"
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="cep"
                        render={({ field: { onChange, value } }) => (
                            <InputStylesAddress 
                                onChangeText={onChange}
                                value={value}
                                placeholder="Informe seu CEP"
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="cep"
                        render={({ field: { onChange, value } }) => (
                            <InputStylesAddress 
                                onChangeText={onChange}
                                value={value}
                                placeholder="Informe seu CEP"
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="cep"
                        render={({ field: { onChange, value } }) => (
                            <InputStylesAddress 
                                onChangeText={onChange}
                                value={value}
                                placeholder="Informe seu CEP"
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="cep"
                        render={({ field: { onChange, value } }) => (
                            <InputStylesAddress 
                                onChangeText={onChange}
                                value={value}
                                placeholder="Informe seu CEP"
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="cep"
                        render={({ field: { onChange, value } }) => (
                            <InputStylesAddress 
                                onChangeText={onChange}
                                value={value}
                                placeholder="Informe seu CEP"
                            />
                        )}
                    />
                </ScrollView>
            </Container>
        </LinearGradientAddress>
    );
}