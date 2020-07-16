import React from 'react'
import {connect} from 'react-redux'
import {toggleOption} from '../../Actions/productAction'

const Products = props => {
    const addItem = e => {
        e.preventDefault()

        props.addItem(true)
    }

    return (
        <div>
            <div className="card jumbotron p-0" style={{ width: "200px" }}>
                <div className="card-body d-flex justify-content-center align-items-center">
                    <div className="btn btn-secondary rounded-circle w-75 h-75" onClick={addItem}>
                        <h1 className="display-1 mb-0">+</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        addItem: option => dispatch(toggleOption(option))
    }
}

export default connect(null, mapDispatchToProps)(Products)
