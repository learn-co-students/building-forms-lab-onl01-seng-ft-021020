// Add BandInput component
import React, { Component } from "react";

class BandInput extends Component {
  state = {
    name: "",
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name:''
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            onChange={this.handleOnChange}
            type="text"
            name="name"
            id="name"
            value={this.state.name}
          />
          <input type="submit" value="AddBand" />
        </form>
      </div>
    );
  }
}


export default BandInput;
