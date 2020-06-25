// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleOnChange = event =>{
    this.setState({
      name: event.target.value
    })
  }
  
  handleOnSubmit = event =>{
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({name:''})
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleOnSubmit}>
          <input 
          type='text'
          onChange={this.handleOnChange}
          value={this.state.name} ></input>
          <button type="submit" >Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput
