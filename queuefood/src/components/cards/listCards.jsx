import React from 'react'
import Card from './cards'

const listCards = props => {
    const { listProducts, notify } = props
    const products = listProducts && listProducts.map(product => {
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

export default listCards
