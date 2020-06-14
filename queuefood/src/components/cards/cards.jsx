import React from 'react'
import '../../css/cards.css'

const Card = props => {
    return (
        <div>
            <div class="card container col-xs-12 col-md-6 col-lg-4 bg-light" style={{ width: "18 rem" }}>
                <img src="https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f000010ZDNXEA4/5c001711e4b00010cfa42363.jpg&w=710&h=462" class="card-img-top" alt="..." />
                <div class="card-body bg-warning">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div class="btn btn-primary">Order</div>
                </div>
            </div>
        </div>
    )
}

export default Card