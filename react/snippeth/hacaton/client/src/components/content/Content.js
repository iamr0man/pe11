import React from 'react';

import './Content.css'

import Card from './Card'

import video from './back.mp4'

const Content = () => {
  
  return (
    <div className="main">
      <div className="main-headline">
            <h2 className="top">LEARN TO CODE</h2>  
            <h2 className="bottom">AND FINALLY DO WORK YOU <span className="highlight">actually</span> LOVE</h2>  
      </div>
      <Card />
      <video src={video} autoPlay muted loop id="myVideo" />
    </div>
  );
}

export default Content;
