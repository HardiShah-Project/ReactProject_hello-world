import React ,{useState,useEffect} from 'react'
function HookMouse(){
const [x,setX]=useState(0)
const [y,setY]=useState(0)
const logMousePostition=(e)=>{
    console.log('mouse event')
    setX(e.clientX)
    setY(e.clientY)
}
useEffect(()=>{
    console.log('useeffect called')
    window.addEventListener('mousemove',logMousePostition)
    return ()=>{
        console.log('remove eventlistener')
        window.removeEventListener('mousemove',logMousePostition)
    }
},[])
    return(
        <div>
          Hooks x-{x} y-{y}
        </div>
    )
}
export default HookMouse