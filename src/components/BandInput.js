// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
    constructor(){
        super()
        this.state = {
            name: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addBand(this.state)
        this.setState({
            name: ""
        })
    }

    render() {
        return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
                <input type="submit"/>
            </form>
        </div>
        )
    }
}

export default BandInput
