import { useState } from 'react'
import PlayPauseButton from './components/PlayPauseButton';
import ProgressBar from './components/ProgressBar';
import './App.css'

function App() {

  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div>
      <h1>Welcome to Tree Rave!</h1>
      <div>Listen now:</div>
      <PlayPauseButton isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
      <ProgressBar />
    </div>
  );
}

export default App
