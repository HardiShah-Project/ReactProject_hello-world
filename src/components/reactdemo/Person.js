import React from 'react'
 const Person=({person})=>{
    return(
        <div>
            <h2>I am {person.name}. I am {person.age} years old.</h2>
        </div>
    )
}
export default Person