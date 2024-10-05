import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import slapSound from './slap.mp3'; // Add a slap sound in the public folder
import reetuWeepGif from './weep.gif'; // Add reetu weep GIF
import anusayaWeepGif from './weep2.gif'; // Add anusaya weep GIF

const FunnyButtons = () => {
  const [showReetuEffect, setShowReetuEffect] = useState(false);
  const [showAnusayaEffect, setShowAnusayaEffect] = useState(false);
  const [showReetuGif, setShowReetuGif] = useState(false);
  const [showAnusayaGif, setShowAnusayaGif] = useState(false);
  const [funnyMessage, setFunnyMessage] = useState('');

  // Play slap sound
  const playSlapSound = () => {
    const audio = new Audio(slapSound);
    audio.play();
  };

  // Handle showing the GIF for Reetu
  const handleReetuSlap = () => {
    setShowReetuEffect(true);
    setShowReetuGif(true);
    playSlapSound();
    setFunnyMessage('Reetu is crying like a baby! 😂');
    setTimeout(() => {
      setShowReetuEffect(false);
      setShowReetuGif(false);
      setFunnyMessage('');
    }, 3000); // Show for 3 seconds
  };

  // Handle showing the GIF for Anusaya
  const handleAnusayaSlap = () => {
    setShowAnusayaEffect(true);
    setShowAnusayaGif(true);
    playSlapSound();
    setFunnyMessage('Anusaya is super dizzy! 😵‍💫');
    setTimeout(() => {
      setShowAnusayaEffect(false);
      setShowAnusayaGif(false);
      setFunnyMessage('');
    }, 3000); // Show for 3 seconds
  };

  const reetuSlap = useSpring({
    transform: showReetuEffect ? 'translateX(30px)' : 'translateX(0px)',
    config: { tension: 200, friction: 10 },
  });

  const anusayaDizzy = useSpring({
    transform: showAnusayaEffect ? 'rotate(360deg)' : 'rotate(0deg)',
    config: { tension: 180, friction: 12 },
  });

  const weepingEffect = useSpring({
    opacity: showReetuEffect || showAnusayaEffect ? 1 : 0,
    transform: 'translateY(10px)',
    from: { opacity: 0 },
  });

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Reetu Section */}
      <button
        onClick={handleReetuSlap}
        style={buttonStyle}
      >
        Give Reetu a Super Slap 😂
      </button>
      <animated.div style={reetuSlap}>
        {showReetuEffect && (
          <div style={emojiContainerStyle}>
            <span style={slapStyle}>👋</span>
            <span style={emojiStyle}>😭</span>
          </div>
        )}
      </animated.div>
      {/* Show Reetu GIF */}
      {showReetuGif && (
        <div>
          <img src={reetuWeepGif} alt="Reetu Weeping" style={gifStyle} />
        </div>
      )}

      {/* Anusaya Section */}
      <button
        onClick={handleAnusayaSlap}
        style={buttonStyle}
      >
        Slap Anusaya to Dizzy Land 🤪
      </button>
      <animated.div style={anusayaDizzy}>
        {showAnusayaEffect && (
          <div style={emojiContainerStyle}>
            <span style={slapStyle}>👋</span>
            <span style={emojiStyle}>😵‍💫</span>
          </div>
        )}
      </animated.div>
      {/* Show Anusaya GIF */}
      {showAnusayaGif && (
        <div>
          <img src={anusayaWeepGif} alt="Anusaya Dizzy" style={gifStyle} />
        </div>
      )}

      {/* Display Funny Message */}
      {funnyMessage && (
        <div style={messageStyle}>
          {funnyMessage}
        </div>
      )}

      {/* Funny Disclaimer */}
      <div style={disclaimerStyle}>
        Disclaimer: This site is purely for fun! All slaps and weeping are virtual. By Gurujindar Singh, the mastermind behind all the chaos. 😜
      </div>
    </div>
  );
};

// Styles for the buttons, emojis, and slap effects
const buttonStyle = {
  padding: '10px 20px',
  margin: '20px',
  fontSize: '18px',
  borderRadius: '10px',
  backgroundColor: '#ff4081',
  color: '#fff',
  cursor: 'pointer',
  boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
};

const emojiStyle = {
  fontSize: '60px',
  marginLeft: '20px',
};

const slapStyle = {
  fontSize: '60px',
  color: 'red',
  animation: 'slapEffect 0.5s ease-in-out',
};

const emojiContainerStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '20px',
};

const gifStyle = {
  width: '300px',
  marginTop: '20px',
};

const messageStyle = {
  fontSize: '20px',
  color: '#ff4081',
  marginTop: '20px',
  fontWeight: 'bold',
};

const disclaimerStyle = {
  marginTop: '40px',
  fontSize: '16px',
  color: 'blue',
  textAlign: 'center',
};

export default FunnyButtons;
