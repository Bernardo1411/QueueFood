import React from 'react'
import {connect} from 'react-redux'
import {orderProduct} from '../../Actions/OrderAction'

const Card = props => {
    const { product } = props
    const order = e =>{
        e.preventDefault()
        props.orderProduct(product)
    }
    return (
        <div className="col-xs-12 col-sm-6 col-lg-4 mb-3">
            <div className="card bg-light" style={{ width: "18 rem" }}>
                <img src="https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f000010ZDNXEA4/5c001711e4b00010cfa42363.jpg&w=710&h=462" className="card-img-top img-fluid" alt="..." />
                <div className="card-body bg-warning">
                    <h5 className="card-title">{product.flavour}</h5>
                    <div className="container">
                        <p className="card-text col-12">Ingredients: {product.description}</p>
                        <p className="card-text col-12 float-right mb-2">Price: {product.price}</p>
                    </div>
                    <div className="btn btn-primary" onClick={order}>Order</div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        orderProduct: product =>{dispatch(orderProduct(product))}
    }
}

export default connect(null, mapDispatchToProps)(Card)