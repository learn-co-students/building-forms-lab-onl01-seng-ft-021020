import React, { Component } from "react";
import BandInput from "../components/BandInput";
import { connect } from "react-redux";
import { addBand } from "../actions/bands";

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />

        <ul>
          {this.props.bands.map((band, i) => {
            return <li key={i}>{band.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  bands: state.bands,
});

const mapDispatchToProps = {
  addBand,
};

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
