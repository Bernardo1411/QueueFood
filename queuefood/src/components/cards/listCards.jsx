import React from 'react'
import Card from './cards'
import { firestoreConnect } from "react-redux-firebase";
import {connect} from 'react-redux'
import { compose } from 'redux';

const listCards = props => {
    const { notify, listOfProducts } = props
    const products = listOfProducts && listOfProducts.map(product => {
        return (
            <Card product={product} notify={notify} key={product.id}/>
        )
    })
    return (
        <div className="jumbotron mb-0">
            <div className="container-fluid">
                <div className="row">
                    {products}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        listOfProducts: state.firestore.ordered.listOfProducts
    }
}

export default compose(connect(mapStateToProps),
firestoreConnect(props =>{
    return [
        {
            collection: 'store',
            doc: props.store.id,
            subcollections: [{ collection: 'listOfProducts' }],
            storeAs: 'listOfProducts'
        }
    ]
})
)(listCards)
