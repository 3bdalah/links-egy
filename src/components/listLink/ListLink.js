import React from 'react'

import links from "./../../Data/Data.json";
const ListLink = () => {

    let uniqueCategory = new Map(), QCategory = [];
    const linksData = links.links;
    console.log('links Data -> ',linksData);
    linksData.forEach((item) => {
        // console.log('item category' , item.category);
        uniqueCategory.set(item.category,0);
    });
    uniqueCategory.forEach((value,key) => {
        console.log('key',key);
        QCategory.push(key);
    })
    // console.log(linksData['games']);
    return (
        <>
            {QCategory.map(item => {
                return (<button key={item} className="btn-category">{item}</button>)
            })}
        </>
    )
}

export default ListLink
