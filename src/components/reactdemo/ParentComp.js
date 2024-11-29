import React, { PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'
class ParentComp extends PureComponent{
    constructor(){
        super()
        this.state={
            name:'vishwas'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'vishwas'
            })
        },2000)
    }
    render(){
        console.log('**********************Parent comp render************************')
        return(
            <div>
                Parent Component 
                <MemoComp name={this.state.name}/>
                {/* <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp> */}
            </div>
        )
    }
}
export default ParentComp