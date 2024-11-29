import React from 'react'
export const FunctionClick=()=>{
    function clickHandler()
    {
        console.log('click')
    }
    return(
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    );
}