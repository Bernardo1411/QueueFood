import React from 'react'

const Card = props => {
    const { products } = props
    return (
        <div className="col-xs-12 col-md-6 col-lg-4 mb-3">
            <div class="card bg-light" style={{ width: "18 rem" }}>
                <img src="https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f000010ZDNXEA4/5c001711e4b00010cfa42363.jpg&w=710&h=462" class="card-img-top" alt="..." />
                <div class="card-body bg-warning">
                    <h5 class="card-title">{products.flavour}</h5>
                    <div className="container">
                        <p class="card-text col-12">Ingredients: {products.description}</p>
                        <p class="card-text col-12 float-right mb-2">Price: {products.price}</p>
                    </div>
                    <div class="btn btn-primary">Order</div>
                </div>


            </div>
        </div>
    )
}

export default Card