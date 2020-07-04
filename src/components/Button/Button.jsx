import React from "react";
import Styled from "styled-components";

const Div = Styled.div`
`;

const ButtonStyled = Styled.button`
color: blue;

`;
const SpanStyled = Styled.span`
${ButtonStyled}:hover & {
    padding-right: 25px;
}
${ButtonStyled}:after & {
    padding-right: 25px;
}
`;

function Button(props) {
    return (
        <Div>
            <ButtonStyled>
                <SpanStyled> {props.value}</SpanStyled>
            </ButtonStyled>
        </Div>
    );
}

export default Button;
