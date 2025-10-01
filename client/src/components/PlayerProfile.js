import React from 'react';

function PlayerProfile({ player }) {
  return (
    <div>
      <h2>{player.name}</h2>
      <p>Role: {player.role}</p>
      <p>Matches: {player.matches}</p>
      <p>Runs: {player.runs}</p>
      <p>Wickets: {player.wickets}</p>
    </div>
  );
}

export default PlayerProfile;
