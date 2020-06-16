import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import {deleteItem} from '../../Actions/OrderAction'

const Acquisition = props => {
    const { item } = props
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
                    <Button variant="warning">Keep buying</Button>
                    <Button variant="danger" onClick={deleteItem(item.id)}>Remove</Button>
                    <Button variant="primary">Confirm</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default Acquisition
