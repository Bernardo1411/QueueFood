import React, { Component } from 'react'

const asyncComponent = componentFunc => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount() {
            componentFunc().then(component => {
                this.setState({component: component.default})
            })
        }

        render() {
            const Comp = this.state.component

            return Comp ? <Comp {...this.props} /> : null
        }
    }
}

export default asyncComponent