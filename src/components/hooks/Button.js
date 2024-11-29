import React from 'react'
function Button({ handleClick, children }) {
    console.log('render button-', children)
    return (

        <button type="button" onClick={handleClick}>{children}</button>

    )
}
export default React.memo(Button)