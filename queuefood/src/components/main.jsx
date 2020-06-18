import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ListCard from './cards/listCards'

toast.configure()
class Main extends Component {

    notify = () =>{
        toast.success('Product Added', {position: toast.POSITION.TOP_CENTER})
    }

    render() {
        const { listProducts } = this.props
        return (
            <div className="main">
                <div className="bg-dark d-flex justify-content-center">
                    <h2 className="display-5 text-light">Menu</h2>
                </div>
                <ListCard listProducts={listProducts} notify={this.notify}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listProducts: state.firestore.ordered.products
    }
}

export default compose(connect(mapStateToProps),
    firestoreConnect([{ collection: 'products' }]))(Main)