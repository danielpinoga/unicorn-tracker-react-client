import React, { Component } from 'react'
import axios from 'axios'

class UnicornIndex extends Component {
  async componentDidMount() {
    const unicorns = await axios.get('/unicorns')
    console.log(unicorns)
  }
  render() {
    return (
      <div>
        Unicorn Index
      </div>
    )
  }
}

export default UnicornIndex