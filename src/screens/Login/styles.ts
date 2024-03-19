import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";


export const LinearGradientLogin = styled(LinearGradient)`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
`
export const Container = styled.View`
    width: 260px;
`

export const ImageLogo = styled.Image`
    margin-bottom: 30px;
`

export const InputStylesLogin = styled.TextInput`
    background-color: #729ef7;
    width: 260px;
    height: 40px;   
    border-radius: 8px;
    margin-bottom: 8px;
    padding-left: 10px;
    color: black;
    font-weight: bold;
`

export const TextErrorLogin = styled.Text`

    align-self: flex-start;
    color: #ff375b;
    margin-bottom: 8px;
`

export const ButtonStylesForgets = styled.TouchableOpacity`
    align-self: flex-end;
    margin-bottom: 30px;
`

export const ButtonTextForgets = styled.Text`
    text-decoration: underline;
    font-weight: bold;
`

export const ButtonStylesLogin = styled.TouchableOpacity`
    background-color: #4476D9;
    width: 260px;
    height: 40px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`
export const ButtonTextLogin = styled.Text`
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
`

export const ViewRegister = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`