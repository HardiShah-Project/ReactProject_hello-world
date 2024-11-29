import React from 'react'
import ReactPlayer from 'react-player'
function Video() {
    return (
        <div>
            <ReactPlayer width='480px' height='240px' controls url='https://www.youtube.com/watch?v=9boMnm5X9ak' 
            onReady={()=>console.log('onReady callback')}
            onStart={()=>console.log('onStart callback')}
            onPause={()=>console.log('onPause callback')}
            onEnded={()=>console.log('onEnded callback')}
            onError={()=>console.log('onError callback')}/>
        </div>
    )
}
export default Video