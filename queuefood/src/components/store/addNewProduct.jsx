import React, { Component } from 'react'
import {connect} from 'react-redux'
import {toggleOption} from '../../Actions/productAction'

/*const initialState = {
    product: null,
    flavour: null,
    size: null,
    price: null
}*/

class AddNewProduct extends Component {

    //state = { ...this.initialState }

    render() {

        const send = e => {
            e.preventDefault()
    
            this.props.toggleOption(false)
        }
    
        const cancel = e => {
            e.preventDefault()
    
            this.props.toggleOption(false)
        }

        const addForm = <div className="container w-50">
            <div className="jumbotron mt-3">
                <form>
                    <div className="form-group">
                        <label htmlFor="product">Product</label>
                        <input type="text" placeholder="Product" id="product" className="form-control" onChange={() => { }} />
                    </div>
                    <div className="form-group ">
                        <label htmlFor="flavour">Flavour</label>
                        <input type="text" placeholder="Flavour" id="flavour" className="form-control" onChange={() => { }} />
                    </div>
                    <div className="form-group ">
                        <label htmlFor="size">Size</label>
                        <input type="text" placeholder="Ex.: Large, medium, small..." id="size" className="form-control" onChange={() => { }} />
                    </div>
                    <div className="form-group ">
                        <label htmlFor="price">Price</label>
                        <input type="text" placeholder="$00,00" id="price" className="form-control" onChange={() => { }} />
                    </div>
                    <button className="btn btn-primary float-right" onClick={send}>Add</button>
                    <button type="submit" className="btn btn-danger float-right mr-2" onClick={cancel}>Cancel</button>
                </form>
                <div className="d-flex justify-content-center">
                    <p className="text-danger">{}</p>
                </div>
            </div>
        </div>

        return (
            <div>
                <h1>Store Page</h1>
                {addForm}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        toggleOption: option => dispatch(toggleOption(option))
    }
}

export default connect(null, mapDispatchToProps)(AddNewProduct)
