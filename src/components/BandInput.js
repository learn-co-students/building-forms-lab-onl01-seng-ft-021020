// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  handleChange = e => {
    this.setState({
      // [e.target.name]: e.target.value
      // causes undefined in tests due to the way
      // they assign value
      name: e.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='name' onChange={this.handleChange} value={this.state.name}/>
          <input type='submit' value='Add Band' />
        </form>
      </div>
    )
  }
}

export default BandInput
