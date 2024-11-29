import React from 'react'
import { Component } from 'react';
class Form extends Component{
    constructor(){
        super()
        this.state={
            userName:'',
            comments:'',
            topic:'react'
        }
    }
    HandleUserNameChange=(event)=>{
        this.setState({
            userName:event.target.value
        })
    }
    HandleCommentsChange=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    HandleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    HandleSubmit=event=>{
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.HandleSubmit}>
            <div>
                <label>UserName</label>
                <input type="text" value={this.state.userName} onChange={this.HandleUserNameChange}/>
            </div>
            <div>
                <label>Comments</label>
                <textarea value={this.state.comments} onChange={this.HandleCommentsChange}/>
            </div>
            <div>
            <label>Topic</label>
                <select value={this.state.topic} onChange={this.HandleTopicChange}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>
            </div>
            <button type="submit">Submit</button>
            </form>
        )
    }
}
export default Form