import React,{Component} from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(){
        super()
        this.state={
            name:'lifecycleA'
        }
        console.log('lifecycleA constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('lifecycleA method')
        return null
    }
    componentDidMount(){
        console.log('lifecycleA componentdidmount')
    }
    shouldComponentUpdate(){
        console.log('lifecycleA shouldupdate')
        return true
    }
    getSnapshotBeforeUpdate(prevstate,prevprops){
        console.log('lifecycleA beforeupdate')
        return null
    }
    componentDidUpdate(){
        console.log('lifecycleA didupdate')
    }
    changeState=()=>{
        this.setState({
            name:'codeevolution'
        })
    }
    render() {
        console.log('lifecycleA render')
        return (
            <div>
                <div><h1>LifeCycleA</h1> </div>
                <button onClick={this.changeState}>change state</button>
                <LifeCycleB />
            </div>
        )
    }
}
export default LifeCycleA