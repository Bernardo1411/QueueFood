import React from 'react'
import Acquisition from './acquisition'

const ListOfAcquisitions = props => {
    const {listItems} = props
    console.log(props)
    const item = Array.isArray(listItems) && listItems.length !== 0 ? listItems.map(item =>{
        return <Acquisition item={item} key={item.id} />
    }):<div className="container d-flex justify-content-center">
        <h5 className="font-weight-bold text-dark">No product found</h5>
    </div>

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
