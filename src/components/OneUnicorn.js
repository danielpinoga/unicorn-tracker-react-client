import React, { Component } from 'react'
import axios from 'axios'

class OneUnicorn extends Component {
  state = {
    unicorn: {}
  }

  async componentDidMount() {
    const unicornId = this.props.match.params.id
    const response = await axios.get(`/unicorns/${unicornId}`)
    this.setState({ unicorn: response.data })
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