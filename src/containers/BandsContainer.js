import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <React.Fragment>
        <BandInput addBand={(band) => this.props.dispatch({type: "ADD_BAND", band: band})} />
        <div>
          <ul>
            {this.props.bands.map((band, idx) => <li key={idx}>{band.name}</li>)}
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default connect(state => (state))(BandsContainer)
