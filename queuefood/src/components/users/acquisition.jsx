import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import {deleteItem} from '../../Actions/OrderAction'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

const Acquisition = props => {
    const { item } = props

    const delItem = e =>{
        e.preventDefault()
        props.deleteItem(item.id)
    }

    const goToHome = e =>{
        e.preventDefault()
        props.history.push('/')
    }

    return (
        <div className="col-xs-12 col-sm-6 col-lg-4">
            <Modal.Dialog className="border border-0 rounded-right border-dark">
                <Modal.Header closeButton className="bg-secondary border-0 border-warning">
                    <Modal.Title>
                        <p className="text-warning font-weight-bold">{item.flavour}</p>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className="bg-secondary border-0">
                    <p className="text-warning font-weight-bold">{item.description}</p>
                    <p className="text-warning font-weight-bold">${item.price}</p>
                </Modal.Body>

                <Modal.Footer className="bg-secondary border-top border-warning">
                    <Button variant="warning" onClick={goToHome}>Keep buying</Button>
                    <Button variant="danger" onClick={delItem}>Remove</Button>
                    <Button variant="primary">Confirm</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        deleteItem: itemId =>{dispatch(deleteItem(itemId))}
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Acquisition))
