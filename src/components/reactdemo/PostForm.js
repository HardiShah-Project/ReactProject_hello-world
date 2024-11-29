import React, { Component } from 'react'
import axios from 'axios'
export class PostForm extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            username:'',
            email:''
        }
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitHandler=(e)=>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/users',this.state)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    render(){
        const {name,username,email}=this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="name" value={name} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="username"  value={username} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="email"  value={email} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}