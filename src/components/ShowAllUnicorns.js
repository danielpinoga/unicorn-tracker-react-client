import React, { Component } from 'react'
import axios from 'axios'
import { Card } from 'semantic-ui-react'
import styled from 'styled-components'

const CardStyle = styled(Card)`
  &&&&{
    width: 20vw;
  }
`

class ShowAllUnicorns extends Component {
  state = {
    unicorns: []
  }

  async componentDidMount() {
    const response = await axios.get('/unicorns')
    console.log(response.data)
    this.setState({ unicorns: response.data })
  }

  render() {
    const unicornList = this.state.unicorns.map(unicorn => {
      return (
        <CardStyle color={unicorn.color} key={unicorn.id}>
          <Card.Header>{unicorn.name}</Card.Header>
          <Card.Meta>{unicorn.color}</Card.Meta>
        </CardStyle>
      )
    })
    return (
      <div>
        Unicorn Index
        {unicornList}
      </div>
    )
  }
}

export default ShowAllUnicorns