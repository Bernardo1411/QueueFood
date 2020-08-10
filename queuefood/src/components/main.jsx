import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import ListCard from './cards/listCards'

toast.configure()
class Main extends Component {

    notify = (isAuth) => {
        isAuth ? toast.success('Product Added', { position: toast.POSITION.TOP_CENTER, autoClose: 2000, hideProgressBar: true }) : toast.error('Login first!', { position: toast.POSITION.TOP_CENTER, autoClose: 2000, hideProgressBar: true })
    }

    render() {
        const { listStore } = this.props

        return (
            <div className="main">
                <div className="bg-dark d-flex justify-content-center">
                    <h2 className="display-5 text-light">Menu</h2>
                </div>
                {Array.isArray(listStore) && listStore.length !== 0 ? listStore.map(store => {
                    return <ListCard store={store} notify={this.notify} key={store.id} />
                }) : null
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listStore: state.firestore.ordered.store
    }
}

export default compose(connect(mapStateToProps),
    firestoreConnect([{ collection: 'store' }]))(Main)