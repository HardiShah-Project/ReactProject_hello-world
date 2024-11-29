import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
export class ParentComponent extends Component{
    constructor(){
        super()
        this.state={
            parentName:'parent'
        }
        this.greetParent=this.greetParent.bind(this)
    }
    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    render(){
        return(
            <div>
                <ChildComponent GreetHandler={this.greetParent}/>
            </div>
        )
    }
}