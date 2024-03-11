import styled from "styled-components/native"
import { LinearGradient } from "expo-linear-gradient"


export const Container = styled(LinearGradient)`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const ImageLogo = styled.Image`
    margin-bottom: 30px;
`

export const ButtonSenha = styled.View`
    width: 260px;
    margin-bottom: 15px;
`

export const ButtonSenhaText = styled.Text`
    text-align: right;
    text-decoration: underline;
    color: #4476D9;
    font-size: 12px;
`

export const ButtonCadastro = styled.View`
    width: 260px;
    border: 1px solid black;
    margin-top: 25px;
    flex-direction: row;
    justify-content: center;
`

export const ButtonCadastroText = styled.Text`
    color: #4476D9;
    text-decoration: underline;
    font-size: 12px;
`