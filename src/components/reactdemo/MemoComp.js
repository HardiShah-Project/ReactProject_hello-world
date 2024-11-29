import React from 'react'
function MemoComp({name}) {
    console.log('memocomp render')
    return(
        <div>
            {name}
        </div>
    )
    
}
export default React.memo(MemoComp)