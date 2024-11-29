import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor() {
        super()
        this.state = {
            name: 'lifecycleB'
        }
        console.log('lifecycleB constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('lifecycleB method')
        return null
    }
    componentDidMount() {
        console.log('lifecycleB componentdidmount')
    }
    shouldComponentUpdate(){
        console.log('lifecycleB shouldupdate')
        return true
    }
    getSnapshotBeforeUpdate(prevstate,prevprops){
        console.log('lifecycleB beforeupdate')
        return null
    }
    componentDidUpdate(){
        console.log('lifecycleB didupdate')
    }
    render() {
        console.log('lifecycleB render')
        return (

            <div>
                <h1>LifeCycleB</h1>
            </div>


        )
    }
}
export default LifeCycleB