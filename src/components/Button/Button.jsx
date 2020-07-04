import React from "react";
import Styled from "styled-components";

// Saya belajar membuat tombol button menggunakan Styled component
// line di bawah merupakan style pada tombol button yg saya buat
const Div = Styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
const ButtonStyled = Styled.button`
    display: inline-block;
    border-radius: 4px;
    background-color: #f4511e;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 24px;
    padding: 20px;
    width: 200px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
}

`;
const SpanStyled = Styled.span`
cursor: pointer;
display: inline-block;
position: relative;
transition: 0.5s;
${ButtonStyled}:hover & {
    padding-right: 25px;
}
${ButtonStyled}:after & {
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
}
`;

function Button(props) {
    return (
        <Div>
            <ButtonStyled onClick={props.function}>
                <SpanStyled> {props.value}</SpanStyled>
            </ButtonStyled>
        </Div>
    );
}

export default Button;
