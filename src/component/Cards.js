import React from 'react';

import './Cards.scss';



export default function Cards(props) {
    return(
<div className="Cards">
        {props.setup && <h3>Setup: {props.setup}</h3>}
        <p>Punchline: {props.punchline}</p>
    </div>
    )
}