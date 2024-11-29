import React, { Component } from 'react'
export class Welcome extends Component{
    render(){
        const {name}=this.props
    return <h1>Class component {name}</h1>
    }
}