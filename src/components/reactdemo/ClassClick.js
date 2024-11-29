import React, { Component } from 'react'
 class ClassClick extends Component{
    cllickHandler(){
        console.log('click event')
    }
    render(){
        return(
            <div>
                <button onClick={this.cllickHandler}>Click Me!</button>
            </div>
        );
    }
}
export default ClassClick