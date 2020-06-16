import React, { Component } from 'react'
import ListCard from './cards/listCards'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Main extends Component {
    render() {
        const { listProducts } = this.props
        return (
            <div className="main">
                <div className="bg-dark d-flex justify-content-center">
                    <h2 className="font-weight-bold text-light">Menu</h2>
                </div>
                <ListCard listProducts={listProducts} />
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