import React from 'react';

function Item(props)
{
    const [list] = props.list;
    const newList = list.map(it => {
        <div className = "list">{it}</div>
    })
    return (
        <></>
    );
}