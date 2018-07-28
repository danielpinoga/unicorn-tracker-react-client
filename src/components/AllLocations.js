import React, { Component } from 'react'
import { ComponentWrapper, CardStyle } from './common/SharedComponents'
import axios from 'axios'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class AllLocations extends Component {
  state = {
    locations: []
  }

  async componentDidMount() {
    const response = await axios.get('/locations')
    this.setState({ locations: response.data })

  }

  render() {

    const locationInfo = this.state.locations.map(location => {
      return (
        <Link to={`/locations/${location.id}`}>
          <CardStyle>
            {location.name}
          </CardStyle>
        </Link>
      )
    })
    return (
      <ComponentWrapper>
        <Card.Group>
          {locationInfo}
        </Card.Group>
      </ComponentWrapper>
    )
  }
}

export default AllLocations