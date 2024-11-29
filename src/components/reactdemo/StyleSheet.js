import React from 'react'
import './myStyles.css'
export const StyleSheet=(props)=>{
    let className=props.primary?'primary':''
    return(
        <div>
            <h1 className={`${className} font-xl `}>StyleSheet</h1>
        </div>
    )
}