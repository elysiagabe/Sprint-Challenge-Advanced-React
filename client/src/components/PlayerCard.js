import React from 'react';

const PlayerCard = (props) => {
    console.log('player card props', props);

    return (
        <div className="player-card">
            <h3>{props.name}</h3>
            <p>Country: {props.country}</p>
            <p>No. of Searches: {props.searches}</p>
        </div>
    )
}

export default PlayerCard;