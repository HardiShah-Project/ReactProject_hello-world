import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
const initialState = {
    loading: true,
    error: '',
    post: {}
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'Fetch_succ':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'Fetch_err':
            return {
                loading: false,
                post: {},
                error: 'something went wrong'

            }
        default:
            return state

    }
}

function DataFetchingOne() {
    // const [loading,setLoading]=useState(true)
    // const [error,setError]=useState('')
    // const [post,setPost]=useState({})

    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/posts/1')
    //     .then(res=>{
    //         setLoading(false)
    //         setError('')
    //         setPost(res.data)
    //     })
    //     .catch(err=>{
    //         setLoading(false)
    //         setPost({})
    //         setError('Something went wrong!')
    //     })
    // },[])
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                dispatch({ type: 'Fetch_succ', payload: res.data })
            })
            .catch(err => {
                dispatch({ type: 'Fetch_err' })
            })
    }, [])
    return (
        <div>
            {state.loading ? 'Loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}
export default DataFetchingOne