import React from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background-color: black;
  color: white;
  font-size: 40px;
  height: 7vh;
`

const Header = ({ name }) => (
  <HeaderStyle>
    Unicorn Manager
  </HeaderStyle>
)

export default Header