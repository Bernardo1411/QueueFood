import React from 'react'
import Card from './cards'

const listCards = props => {
    const { listProducts } = props
    const products = listProducts && listProducts.map(product => {
        return (
            <Card product={product} key={product.id}/>
        )
    })
    return (
        <div className="jumbotron">
            <div className="container-fluid">
                <div className="row">
                    {products}
                </div>
            </div>
        </div>
    )
}

export default listCards
