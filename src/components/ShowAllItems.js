import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { ComponentWrapper, CardStyle } from './common/SharedComponents';

class ShowAllItems extends Component {
  state = {
    unicorns: [],
    locations: []
  }

  async componentDidMount() {
    if (this.props.itemType == 'unicorn') {
      const unicorns = await this.props.getAllUnicorns()
      this.setState({ unicorns })
    } else {
      const locations = await this.props.getAllLocations()
      this.setState({ locations })
    }
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

    const locationList = this.state.locations.map(location => {
      return (
        <Link to={`/locations/${location.id}`} key={location.id}>
          <CardStyle>
            <Card.Header>{location.name}</Card.Header>
          </CardStyle>
        </Link>
      )
    })
    return (
      <ComponentWrapper>
        <Card.Group>
          {this.props.itemType == 'unicorn' ? unicornList : locationList}
        </Card.Group>
      </ComponentWrapper>
    )
  }
}

export default ShowAllItems