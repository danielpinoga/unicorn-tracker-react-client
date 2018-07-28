import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { ComponentWrapper, CardStyle } from './common/SharedComponents';

class ShowAllItems extends Component {
  state = {
    items: []
  }

  async componentDidMount() {
    const items = await this.props.getAllItems()
    this.setState({ items })
  }

  render() {
    let itemList = this.state.items.map(item => {
      if (this.props.itemType == 'unicorn') {
        return (
          <Link to={`/unicorns/${item.id}`} key={item.id}>
            <CardStyle>
              <Card.Header>{item.name}</Card.Header>
              <Card.Content extra>{item.color}</Card.Content>
            </CardStyle>
          </Link>
        )
      } else {
        return (
          <Link to={`/locations/${item.id}`} key={item.id}>
            <CardStyle>
              <Card.Header>{item.name}</Card.Header>
            </CardStyle>
          </Link>
        )
      }
    })

    return (
      <ComponentWrapper>
        <Card.Group>
          {itemList}
        </Card.Group>
      </ComponentWrapper >
    )
  }
}

export default ShowAllItems