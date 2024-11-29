import React from 'react'
import '../../App.css'
import {css} from '@emotion/react'
import {BounceLoader,BarLoader,BeatLoader} from 'react-spinners'

function Spinner() {
    
    const loaderCSS=css `
    margin-top:25px;
    margin-bottom:25px;
    `
    return (
        <div className='App'>
          <BounceLoader css={loaderCSS} size={24} color='red'loading/>
          <BarLoader css={loaderCSS} size={48} color='orange' loading/>
          <BeatLoader css={loaderCSS} size={72} color='maroon' loading/>
        </div>
    )
}
export default Spinner