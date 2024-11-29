import React, { Component } from 'react'
import axios from 'axios';

export class PostList extends Component{
    constructor(){
        super()
        this.state={
            posts:[],
            errmsg:''
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            console.log(response)
            this.setState({posts:response.data})
        })
        .catch(error=>{
            console.log(error)
            this.setState({errmsg:'error retriving data'})
        })
    }
    render(){
        const {posts,errmsg}=this.state
        return(
            <div>
                List of users
                {
                 posts.length?
                 posts.map(post=><div key={post.id}>{post.name}</div>):
                null
                }
                {
                    errmsg?<div>{errmsg}</div>:null
                }
            </div>
        )
    }
}