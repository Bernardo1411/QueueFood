import React from 'react'
import ListOfAcquisitions from './listOfAcquisitions'
import { connect } from 'react-redux'

const Basket = props => {
    const { userId } = props
    return (
        <div>
            <div className="bg-dark d-flex justify-content-center">
                <h2 className="display-5 text-light">Basket</h2>
            </div>
            <ListOfAcquisitions userId={userId} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userId: state.firebase.auth.uid
    }
}

export default connect(mapStateToProps)(Basket)
