import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SideBarStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  background-color: black;
  color: red;
  min-width: 140px;
  height: 90vh;
`

const LinkStyle = styled(Link)`
  margin-top: 20px;
  color: red;
  font-size: 16px;
`

const SideBar = ({ name }) => (
  <SideBarStyle>
    <LinkStyle to='/'>Home</LinkStyle>
    <LinkStyle to='/unicorns'>View Unicorns</LinkStyle>
    <LinkStyle to='/locations'>View Locations</LinkStyle>
  </SideBarStyle>
)

export default SideBar