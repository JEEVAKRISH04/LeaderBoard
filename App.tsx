// src/components/Leaderboard.tsx
import React, { useEffect, useState } from 'react';
import './Leaderbord.css';
import Carousel from './Carousel';


interface Player {
  name: string;
  prize: string;
  time: string;
}

const Leaderboard: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    // Fetch the data (here we use a static example)
    const fetchData = () => {
      const data: Player[] = [
        { name: 'Anjum', prize: '₹50000', time: '00:56:23' },
        { name: 'Pragati Azad', prize: '₹5000', time: '00:56:23' },
        { name: 'Pragati Azad', prize: '₹500', time: '00:56:23' },
        { name: 'Hannibal Hector', prize: '', time: '00:56:23' },
        { name: 'Razzi', prize: '', time: '00:56:23' },
        { name: 'McRamble', prize: '', time: '00:56:23' },
        { name: 'Razzi', prize: '', time: '00:56:23' },
        { name: 'McRamble', prize: '', time: '00:56:23' },
        { name: 'Muhammed Anjum Kunnummal', prize: '', time: '00:56:23' },
        { name: 'Muhammed Anjum Kunnummal', prize: '', time: '00:56:23' }
      ];
      setPlayers(data);
    };

    fetchData();
  }, []);

  return (
    
    <div className="leaderboard">
      <div className="nav">
        <img className='imghead' src="./img/Daily View2.png" alt="" />
        <img className='imghead1' src="./img/Daily view.png" alt="" />
      </div>
      <div className='heading'>
        {/* <img className='imghead' src="./img/Daily View 1.png"alt=""/> */}
      </div>
      
      <div className="player-container">
      <div className="player header">
          <span className="position">S.no</span>
          <span className="name">Name</span>
          <span className="time">Time</span>
        </div>
        {players.map((player, index) => (
          <div className="player" key={index}>
            <span className="position">{index + 1}</span>
            <span className="name">{player.name}</span>
            <span className="prize">{player.prize}</span>
            <span className="time">{player.time}</span>
          </div>
        ))}
      </div>
      <div className="pop">
        <Carousel/>
      </div>
      <footer className="footer">
      <div className="text-container">
      <div className="sliding-text">Get your name on leaderboard win exciting prizes!</div>
    </div>
    
      </footer>
    </div>
  );
};

export default Leaderboard;
