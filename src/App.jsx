import { useState } from 'react'
import Box from '@mui/material/Box';

import HlsPlayer from './components/HlsPlayer';
import PlayPauseButton from './components/PlayPauseButton';
import ProgressBar from './components/ProgressBar';
import Background from './components/Background';
import WhatsAppButton from './components/WhatsAppButton';

function App() {

  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
    }}>
      <Background />
      <Box sx={{
        fontSize: '2rem',
        fontWeight: 'bold',
      }}>
        Welcome to Tree Rave!
      </Box>
      <Box sx={{
        fontSize: '1.5rem',
      }}>
        Listen now:
      </Box>
      <PlayPauseButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <HlsPlayer isPlaying={isPlaying} />
      <ProgressBar />
      <WhatsAppButton />
    </Box>
  );
}

export default App
