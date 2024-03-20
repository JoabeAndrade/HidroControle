import { TitleStyles } from "./styles";

type TitleProps = {
    title: string;
}

export function Title({title}: TitleProps){
    return(
        <TitleStyles>{title}</TitleStyles>
    );
}