import React from 'react'

import Navbar from '../../components/Navbar/NavBar'
import Footer from '../../components/footer'
import Aux from '../Aux/Aux'

const layout = props => (
    <Aux>
        <Navbar />
            {props.children}
        <Footer />
    </Aux>
)

export default layout