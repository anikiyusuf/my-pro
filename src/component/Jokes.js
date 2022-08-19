import React from 'react';
import './Jokes.scss';



export default function Jokes(props) {
    console.log(props)
    return(
        <div className="Jokes">
        <h1>{props.joke}</h1>
              <span>5.0</span>
                <span className="gray">({props.reviewCount})  • </span>
                <span className="gray">{props.country}</span>
        
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
            <p>{props.name}</p>
            </div>


    )
}