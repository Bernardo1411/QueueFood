import React from 'react'
import Acquisition from './acquisition'

const ListOfAcquisitions = props => {
    const {listUsers} = props
    const item = Array.isArray(listUsers) && listUsers.length !== 0 ? listUsers.map(user =>{
        return <Acquisition user={user} key={user.uid} />
    }):null

    return (
        <div>
            <div className="container jumbotron mt-3">
                <div className="row">
                    {item}
                </div>
            </div>
        </div>
    )
}

export default ListOfAcquisitions
