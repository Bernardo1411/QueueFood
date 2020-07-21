import React from 'react'
import { connect } from 'react-redux'
import { toggleOption } from '../../Actions/productAction'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const Products = props => {
    const addItem = e => {
        e.preventDefault()

        props.addItem(true)
    }

    return (
        <div className="container d-flex row">
            <div className="card jumbotron p-0 m-2" style={{ width: "200px", height: "200px" }}>
                <div className="card-body d-flex justify-content-center align-items-center">
                    <div className="btn btn-secondary rounded-circle w-75 h-75 d-flex justify-content-center align-items-center" onClick={addItem}>
                        <h1 className="display-1 mb-0">+</h1>
                    </div>
                </div>
            </div>

            {Array.isArray(props.listOfProducts) && props.listOfProducts.length !== 0 ? props.listOfProducts.map(product => {
                return (
                    <div className="card jumbotron p-0 m-2" key={product.id} style={{ width: "200px" }}>
                        <div className="card-body bg-warning">
                            <h4 className="card-title">{product.productName}</h4>
                            <h5 className="card-title">{product.flavour}</h5>
                            <div className="container">
                                <p className="card-text col-12">Ingredients: {product.description}</p>
                                <p className="card-text col-12 float-right mb-2">Size: {product.size}</p>
                                <p className="card-text col-12 float-right mb-2">Price: {product.price}</p>
                            </div>
                        </div>
                    </div>
                )
            }) : null}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        listOfProducts: state.firestore.ordered.listOfProducts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addItem: option => dispatch(toggleOption(option))
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(props => {
        return [
            {
                collection: 'store',
                doc: props.userId,
                subcollections: [{ collection: 'listOfProducts' }],
                storeAs: 'listOfProducts'
            }
        ]
    }))(Products)
