import React from 'react'
import ListOfAcquisitions from './listOfAcquisitions'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'

const Basket = props => {
    const { listUsers } = props
    return (
        <div>
            <div className="bg-dark d-flex justify-content-center">
                <h2 className="display-5 text-light">Basket</h2>
            </div>
            <ListOfAcquisitions listUsers={listUsers} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        listUsers: state.firestore.ordered.users
    }
}

export default compose(connect(mapStateToProps),
    firestoreConnect([{ collection: 'users' }]))(Basket)
