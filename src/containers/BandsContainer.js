import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'
import Bands from '../components/Bands'

class BandsContainer extends Component {
  render() {
    // console.log('bands', this.props.bands)
    return(
      <div>
        Add Bands (Bands Container)
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({type:'ADD_BAND', band})
})

const mapStateToProps = state =>({
  bands:state.bands
})
export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
