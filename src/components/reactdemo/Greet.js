import React from 'react';
export const Greet=props=>
{
    const {name,children}=props
return(
<div>
<h1>Functional Component {name}</h1>
{children}
</div>
);
}
