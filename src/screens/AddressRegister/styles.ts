import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const LinearGradientAddress = styled(LinearGradient)`
    width: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;
`
export const Container = styled.View`
    width: 260px;
`

export const ScrollViewAddress = styled.ScrollView`
    height: 100px;
`

export const InputStylesAddress = styled.TextInput`
    background-color: #729ef7;
    width: 260px;
    height: 40px;   
    border-radius: 8px;
    margin-bottom: 8px;
    padding-left: 10px;
    color: black;
    font-weight: bold;
`

export const ButtonStylesAddress = styled.TouchableOpacity`
    background-color: #4476D9;
    width: 260px;
    height: 40px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`
export const ButtonTextAddress = styled.Text`
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
`
