import React from 'react'
import Acquisition from './acquisition'

const ListOfAcquisitions = props => {
    const {userId} = props
    return (
        <div>
            <div className="container jumbotron mt-3">
                <div className="row">
                    <Acquisition userId={userId} />
                </div>
            </div>
        </div>
    )
}

export default ListOfAcquisitions
