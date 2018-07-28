import React, { Component } from 'react'
import axios from 'axios'
import { Card } from 'semantic-ui-react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ComponentWrapper, CardStyle } from './common/SharedComponents';

class AllUnicorns extends Component {
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

export default AllUnicorns