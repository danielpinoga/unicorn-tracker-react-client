import React, { Component } from 'react'
import axios from 'axios'

class OneUnicorn extends Component {
  state = {
    unicorn: {},
    location: {}
  }

  async componentDidMount() {
    const id = this.props.match.params.id

    if (this.props.itemType == 'unicorn') {
      const response = await axios.get(`/unicorns/${id}`)
      this.setState({ unicorn: response.data })
    }
  }

  render() {
    return (
      <div>
        Unicorn Name: {this.state.unicorn.name}
        <br />
        Unicorn Color: {this.state.unicorn.color}
        <br />
      </div>
    )
  }
}

export default OneUnicorn