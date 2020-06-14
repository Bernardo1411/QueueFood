import React from 'react'
import {connect} from 'react-redux'

const Profile = props => {
    const {firstName, lastName} = props
    return (
        <div>
            <h1>{`Olá, ${firstName} ${lastName}!`}</h1>
        </div>
    )
}

const mapStateToProps = state =>{
    return state.firebase.profile
}

export default connect(mapStateToProps)(Profile)