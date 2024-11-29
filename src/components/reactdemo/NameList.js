import React from 'react'
import Person from './Person';
export const NameList = () => {
    const persons = [
        {
            id: 1,
            name: 'bruce',
            age: 24
        },
        {
            id: 2,
            name: 'clark',
            age: 30
        }
    ]
    //const names=['Bruce','Clark','Diana']
    //const nameList=names.map((name,index)=><h2 key={index}>{index} {name}</h2>)
    const personList = persons.map(person => <Person key={person.id} person={person} />)
    return (
        <div>
            {
                personList
                //nameList
            }
        </div>
    )
}