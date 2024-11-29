import React, { useState } from 'react'
import useFormInput from './useFormInput'
function UserForm() {

    const [firstName, bindFirstName, resetFirstName] = useFormInput('')
    const [lastName, bindLastName, resetLasrstName] = useFormInput('')
    const submitHandler = (e) => {
        e.preventDefault()
        alert(`hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLasrstName()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <input typ="text" {...bindFirstName} />
                </div>
                <div>
                    <input typ="text" {...bindLastName} />
                </div>
                <button>submit</button>
            </form>
        </div>
    )
}
export default UserForm