import React from 'react';
import styled from 'styled-components';

const Content = styled.main `
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
height: 500px;
margin: 0 auto;
box-sizing: border-box;

`
const ContentItem = styled.p `
color: #f1c40f;
text-align: center;
font-family: "Read";
font-size: 22px;
width: 600px;
background-color: #2c3e50;
font-style: italic;
padding: 10px;
box-sizing: border-box;
margin: 40px;

`

export default function content() {
    return(
        <React.Fragment>
            <Content>
                <ContentItem>
                   Muito se fala sobre componentes (components) ou 
                    componetizar sua aplicação, nesse post irei explicar
                    uma forma de estilizar nossos componentes, 
                    assim, garantimos que independente do pedaço da nossa 
                    aplicação onde o componente for utilizado, seu estilo 
                    sempre será o mesmo.
                </ContentItem>
                <ContentItem>
                   Existem diversas maneiras para trabalharmos com estilização de componentes, 
                    sendo algumas delas: Styled Components, CSS Modules, CSS normal ou SASS, etc…
                    Como já mencionado, o assunto do post será a abordagem referente ao Styled Components.
                </ContentItem>
            </Content>
        </React.Fragment>
    );
}