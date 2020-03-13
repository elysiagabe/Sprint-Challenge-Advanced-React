import React from 'react';

const PlayerCard = (props) => {
    console.log('player card props', props);

    return (
        <div>
            <h2>{props.name}</h2>
            <p>Country: {props.country}</p>
            <p>No. of Searches: {props.searches}</p>
        </div>
    )
}

export default PlayerCard;