// src/components/PlayerCard.js
import React from 'react';

const PlayerCard = ({ player }) => {
  return (
    <div>
      <img src={player.photo} alt={player.name} />
      <h3>{player.name}</h3>
      <p>Position: {player.position}</p>
      <p>Club: {player.club.name}</p>
      <p>Points: {player.points}</p>
    </div>
  );
};

export default PlayerCard;
