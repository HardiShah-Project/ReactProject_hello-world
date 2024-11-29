import React from 'react'
 const ChildComponent=(props)=>{
    return(
        <div>
            <button onClick={()=>props.GreetHandler('child')}>Greet Parent</button>
        </div>
    )
}
export default ChildComponent