import React, { Component } from 'react'
import Card from './cards/cards'
import '../css/main.css'
import {connect} from 'react-redux'

class Main extends Component{
    render(){
        return(
            <div className="main">
                <h2 className="font-weight-bold">Menu</h2>
                <Card />
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return state
}

export default connect(mapStateToProps)(Main)