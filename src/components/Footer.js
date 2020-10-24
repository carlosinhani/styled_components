import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer `
position: fixed;
bottom: 0;
left: 0;
height: 40px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: #2980b9;
height: 90px;
`

const FooterItem = styled.div `
text-decoration: nome;
font-size: 16px;
color: #000;
font-weight: bold;
`


// import { Contairner } from './styles';

export default function footer() {
    return (
       <React.Fragment>
         <Footer>
             <FooterItem>Aula Sobre Styled Componentes</FooterItem>
         </Footer>
       </React.Fragment>
    );
}
