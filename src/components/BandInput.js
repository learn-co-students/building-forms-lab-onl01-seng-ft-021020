// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ""
  }

  handleOnChange = (event) =>{
    // debugger
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    // debugger
    event.preventDefault()
    this.props.addBand(this.state.name)
  }

  render() {
    return(
      <div>
        <form onSubmit={event=> this.handleOnSubmit(event)}>
          <input type="text" onChange={event => this.handleOnChange(event)}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
