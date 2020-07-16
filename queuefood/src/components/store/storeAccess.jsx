import React, { Component } from 'react'
import AddNewProduct from './addNewProduct'
import Products from './product'
import {connect} from 'react-redux'

class StoreAccess extends Component {

    render() {
        const toggleOption = this.props.toggleOption ? <AddNewProduct /> : <Products />

        return (
            <div className="p-4">
                {toggleOption}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        toggleOption: state.product.toggleOption
    }
}

export default connect(mapStateToProps)(StoreAccess)

