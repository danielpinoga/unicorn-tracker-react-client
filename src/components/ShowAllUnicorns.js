import React, { Component } from 'react'
import axios from 'axios'
import { Card } from 'semantic-ui-react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardStyle = styled(Card)`
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

const ComponentWrapper = styled.div`
  margin: 20px;
`

class ShowAllUnicorns extends Component {
  state = {
    unicorns: []
  }

  async componentDidMount() {
    const response = await axios.get('/unicorns')
    this.setState({ unicorns: response.data })
  }

  render() {
    const unicornList = this.state.unicorns.map(unicorn => {
      return (
        <Link to={`/unicorns/${unicorn.id}`} key={unicorn.id}>
          <CardStyle>
            <Card.Header>{unicorn.name}</Card.Header>
            <Card.Content extra>{unicorn.color}</Card.Content>
          </CardStyle>
        </Link>
      )
    })
    return (
      <ComponentWrapper>
        <Card.Group>
          {unicornList}
        </Card.Group>
      </ComponentWrapper>
    )
  }
}

export default ShowAllUnicorns