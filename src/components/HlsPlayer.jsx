import ReactHlsPlayer from 'react-hls-player';
import React from 'react';

export default function HlsPlayer({ isPlaying }) {

  const playerRef = React.useRef();

  if (isPlaying) {
    playVideo();
  }

  if (!isPlaying) {
    pauseVideo();
  }

  function playVideo() {
    playerRef.current.play();
  }

  function pauseVideo() {
    playerRef.current.pause();
  }

  const streamUrl = 'http://192.168.1.79:8080/revelations.m3u8'
  console.log('streamUrl', streamUrl)

  return (
    <ReactHlsPlayer
      src={streamUrl}
      playerRef={playerRef}
      autoPlay={false}
      controls={true}
      width="100%"
      height="auto"
    /> 
  )  
}