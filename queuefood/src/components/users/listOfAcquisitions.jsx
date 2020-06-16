import React from 'react'
import Acquisition from './acquisition'

const ListOfAcquisitions = props => {
    const {listItems} = props
    const item = listItems && listItems.map(item =>{
        return <Acquisition item={item} key={item.id} />
    })

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
