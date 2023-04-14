import ReactHlsPlayer from 'react-hls-player';
import React from 'react';
import { Howl, Howler } from 'howler';

export default function HlsPlayer({ isPlaying }) {

  const playerRef = React.useRef();
  console.log('playerRef', playerRef)

  const streamUrl = 'http://192.168.1.76:8080/revelations.m3u8' //local

  const sound = new Howl({
    src: [streamUrl],
    format: ['mp3'], // or 'ogg' if your stream is in OGG format
    autoplay: true, // play the stream immediately when the component mounts
  });

  return (
    // <ReactHlsPlayer
    //   src={streamUrl}
    //   playerRef={playerRef}
    //   autoPlay={false}
    //   controls={true}
    //   hlsConfig={{
    //     liveDurationInfinity: true,
    //     maxLoadingDelay: 4,
    //     minAutoBitrate: 0,
    //     lowLatencyMode: true,
    //   }}
    // /> 
    <div>
      <p>Status: {sound.playing() ? 'Playing' : 'Stopped'}</p>
      <p>Title: {sound.title()}</p>
      <p>Bitrate: {sound._src[0].split(':')[0]}</p>
    </div>
  )  
}
