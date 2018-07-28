import React, { Component } from 'react'
import axios from 'axios'

class OneLocation extends Component {
  state = {
    location: {}
  }

  async componentDidMount() {
    const locationId = this.props.match.params.id
    const response = await axios.get(`/locations/${locationId}`)
    this.setState({ location: response.data })
  }

  render() {
    return (
      <div>
        Location Name: {this.state.location.name}
      </div>
    )
  }
}

export default OneLocation