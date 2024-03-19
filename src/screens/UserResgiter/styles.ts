import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const LinearGradientRegister = styled(LinearGradient)`
    width: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const Container = styled.View`
    width: 260px;
`

export const TitleText = styled.Text`
    text-align: center;
    font-size: 24px;
    color: #4476D9;
    margin-bottom: 30px;
    font-weight: bold;
    margin: 30px 0;
`

export const InputStylesRegister = styled.TextInput`
    background-color: #729ef7;
    width: 260px;
    height: 40px;   
    border-radius: 8px;
    margin-bottom: 8px;
    padding-left: 10px;
    color: black;
    font-weight: bold;
    margin: 5px 0;
`

export const ButtonStylesRegister = styled.TouchableOpacity`
    background-color: #4476D9;
    width: 260px;
    height: 40px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`
export const ButtonTextRegister = styled.Text`
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
`

export const TextErrorRegister = styled.Text`

    align-self: flex-start;
    color: #ff375b;
    margin-bottom: 8px;
`