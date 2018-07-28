import React, { Component } from 'react'
import { ComponentWrapper } from './common/SharedComponents'
import styled from 'styled-components'

const TextWrapper = styled.div`
  min-width: 20vw;
  min-height: 5vh;
  margin-right: 20px;
  background-color: green;
`

class HomePage extends Component {
  render() {
    return (
      <ComponentWrapper>
        <TextWrapper>
          <h3>
            Welcome to my Unicorn Tracker application!
          </h3>
          <p>
            Syling is not necessarily my forte, so please understand that the coloring is a work in progress. However, I hope this shows off some of my basic react knowledge!
          </p>
        </TextWrapper>
      </ComponentWrapper>
    )
  }
}

export default HomePage