import styled from 'styled-components'
import { Card } from 'semantic-ui-react'

export const ComponentWrapper = styled.div`
  margin: 20px;
`

export const CardStyle = styled(Card)`
  &&&&{
    display: flex;
    align-items: center;
    width: 150px;
    height: 100px;
    margin: 10px;
    background-color: burlywood;
  }
  .header {
    height: 70px;
    color: black;
  }
`
