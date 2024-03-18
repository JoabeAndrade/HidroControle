import { StyleButton, TextButton } from "./styles";

interface ButtonProps {
    onPress: () => void;
    text: string;
}

export function Button({text, onPress}: ButtonProps){
    
    return(
        <StyleButton onPress=()>
            <TextButton>{text}</TextButton>
        </StyleButton>
    );
}