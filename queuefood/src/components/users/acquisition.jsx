import React from 'react'
import { deleteItem } from '../../Actions/OrderAction'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Acquisition = props => {
    const { item } = props

    const delItem = e => {
        e.preventDefault()
        props.deleteItem(item.id)
    }

    const goToHome = e => {
        e.preventDefault()
        props.history.push('/')
    }

    return (
        <div className="col-xs-12 col-sm-6 col-lg-4 mt-2">
            <div className="card border-warning rounded-right">
                <div class="card-body bg-secondary border border-0 rounded-right border-dark">
                        <h5 class="card-title text-warning font-weight-bold">{item.flavour}</h5>
                    
                        <p className="text-warning font-weight-bold">{item.description}</p>
                        <p className="text-warning font-weight-bold">${item.price}</p>
                    
                    <div className="bg-secondary border-top border-warning">
                        <div className="btn btn-warning" onClick={goToHome}>Keep buying</div>
                        <div className="btn btn-danger m-1" onClick={delItem}>Remove</div>
                        <div className="btn btn-primary">Confirm</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        deleteItem: itemId => { dispatch(deleteItem(itemId)) }
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Acquisition))
