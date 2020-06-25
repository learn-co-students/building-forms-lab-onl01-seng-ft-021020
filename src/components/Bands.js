import React from 'react'

const Bands = props => {
    const band = props.bands.map((band, indx) => {
        return <li key={indx}> {band.name}</li>
    })

    return(<div>{band}</div>)
}


export default Bands