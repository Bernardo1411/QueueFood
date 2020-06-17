import React from 'react'
import ListOfAcquisitions from './listOfAcquisitions'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'

const Basket = props => {
    const { listItems } = props
    return (
        <div>
            <div className="bg-dark d-flex justify-content-center">
                <h2 className="display-5 text-light">Basket</h2>
            </div>
            <ListOfAcquisitions listItems={listItems} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        listItems: state.firestore.ordered.basket
    }
}

export default compose(connect(mapStateToProps),
    firestoreConnect([{ collection: 'basket' }]))(Basket)
