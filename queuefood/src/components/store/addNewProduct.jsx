import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleOption } from '../../Actions/productAction'
import { insertProduct } from '../../Actions/productAction'

const initialState = {
    productName: '',
    flavour: '',
    size: '',
    price: '',
    description: ''
}

class AddNewProduct extends Component {

    state = { ...initialState }

    render() {
        const insertData = e => {
            e.preventDefault()

            this.setState({
                [e.target.id]: e.target.value
            })
        }

        const send = e => {
            e.preventDefault()

            this.props.toggleOption(false)
            this.props.insertProduct(this.state)
        }

        const cancel = e => {
            e.preventDefault()

            this.props.toggleOption(false)
        }

        const addForm = <div className="container w-50">
            <div className="jumbotron mt-3">
                <form>
                    <div className="form-group">
                        <label htmlFor="productName">Product</label>
                        <input type="text" placeholder="Product" id="productName" className="form-control" onChange={insertData} />
                    </div>
                    <div className="form-group ">
                        <label htmlFor="flavour">Flavour</label>
                        <input type="text" placeholder="Flavour" id="flavour" className="form-control" onChange={insertData} />
                    </div>
                    <div className="form-group ">
                        <label htmlFor="size">Size</label>
                        <input type="text" placeholder="Ex.: Large, medium, small..." id="size" className="form-control" onChange={insertData} />
                    </div>
                    <div className="form-group ">
                        <label htmlFor="price">Price</label>
                        <input type="text" placeholder="$00,00" id="price" className="form-control" onChange={insertData} />
                    </div>
                    <div className="form-group ">
                        <label htmlFor="description">Description</label>
                        <input type="text" placeholder="about the product" id="description" className="form-control" onChange={insertData} />
                    </div>
                    <button className="btn btn-primary float-right" onClick={send}>Add</button>
                    <button type="submit" className="btn btn-danger float-right mr-2" onClick={cancel}>Cancel</button>
                </form>
                <div className="d-flex justify-content-center">
                    <p className="text-danger">{this.props.isError}</p>
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

const mapStateToProps = state =>{
    return{
        isError: state.product.isError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleOption: option => dispatch(toggleOption(option)),
        insertProduct: product => dispatch(insertProduct(product))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewProduct)