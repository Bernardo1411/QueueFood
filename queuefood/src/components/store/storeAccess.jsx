import React, { Component } from 'react'
import {connect} from 'react-redux'

import AddNewProduct from './addNewProduct'
import Products from './product'

class StoreAccess extends Component {
    render() {
        const toggleOption = this.props.toggleOption ? <AddNewProduct /> : (this.props.userId?<Products userId={this.props.userId}/>:null)

        return (
            <div className="p-4">
                {toggleOption}
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        toggleOption: state.product.toggleOption,
        userId: state.firebase.auth.uid
    }
}

export default connect(mapStateToProps)(StoreAccess)

