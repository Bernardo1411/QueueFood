import React from 'react'
import { deleteItem } from '../../Actions/OrderAction'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const Acquisition = props => {
    const { userId } = props
    const { listItems } = props
    const delItem = (e, itemId) => {
        e.preventDefault()
        props.deleteItem(userId, itemId)
    }
    
    const goToHome = e => {
        e.preventDefault()
        props.history.push('/')
    }

    const addItems = Array.isArray(listItems) && listItems.length !== 0 ? listItems.map(item => {
        return userId === item.userId ?
            <div className="col-xs-12 col-sm-6 col-lg-4 mt-2" key={item.id}>
                <div className="card border-warning rounded-right">
                    <div className="card-body bg-secondary border border-0 rounded-right border-dark">
                        <h5 className="card-title text-warning font-weight-bold">{item.flavour}</h5>

                        <p className="text-warning font-weight-bold">{item.description}</p>
                        <p className="text-warning font-weight-bold">${item.price}</p>

                        <div className="bg-secondary border-top border-warning">
                            <div className="btn btn-warning" onClick={goToHome}>Keep buying</div>
                            <div className="btn btn-danger m-1" onClick={e => delItem(e, item.id)}>Remove</div>
                            <div className="btn btn-primary">Confirm</div>
                        </div>
                    </div>
                </div>
            </div>
            : null
        
    }) : <div className="container d-flex justify-content-center">
            <h5 className="font-weight-bold text-dark">No product found</h5>
        </div>

    return (
        addItems
    )
}

const mapStateToProps = state => {
    return {
        listItems: state.firestore.ordered.myCollections
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteItem: (itemId, userId) => { dispatch(deleteItem(itemId, userId)) }
    }
}

export default withRouter(compose(connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(props => {
        return [
            {
                collection: 'users',
                doc: props.userId,
                subcollections: [{ collection: 'basket' }],
                storeAs: 'myCollections'
            }
        ]
    }))(Acquisition))
