import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled(LinearGradient)`
    width: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const InputStyles = styled.View`
    margin: 30px 0;
`

export const InputTitle = styled.Text`
    text-align: center;
    font-size: 24px;
    color: #4476D9;
    margin-bottom: 30px;
    font-weight: bold;
`