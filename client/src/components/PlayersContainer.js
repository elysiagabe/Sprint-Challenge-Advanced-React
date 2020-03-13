import React from 'react';
import PlayerCard from './PlayerCard';

const PlayersContainer = (props) => {
    console.log('Players container props:', props);

    return (
        <div className="players-container">
            {props.players.map(player => {
                return (
                    <PlayerCard 
                        key={player.id}
                        name={player.name}
                        country={player.country}
                        searches={player.searches}
                    />
                )
            })}
        </div>
    )
}

export default PlayersContainer;