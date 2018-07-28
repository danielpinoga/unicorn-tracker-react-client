import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: red;
  width: 100vw;
  height: 5vh;
  min-height: 25px;
`

const Footer = ({ name }) => (
  <FooterStyle>
    | Daniel Pino Productions |
  </FooterStyle>
)

export default Footer