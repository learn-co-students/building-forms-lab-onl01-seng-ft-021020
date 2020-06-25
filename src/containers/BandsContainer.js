import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux'

class BandsContainer extends Component {

 
  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.createBand}/>
        <ul>
        {this.props.bands.map(band => (<li>{band.name}</li>))}
        </ul>
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch =>{
//   return{
//     addBand: data => dispatch({type: "ADD_BAND", payload: data})
//   }
// }

const mapDispatchToProps = (dispatch) => ({
  createBand: (band) => (dispatch({ 
    type: "ADD_BAND",
    band: {name: band}
  }))
})

const mapStateToProps = ({ bands }) => ({ bands })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
