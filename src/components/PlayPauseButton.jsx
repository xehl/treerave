import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Box from '@mui/material/Box';

export default function PlayPauseButton({ isPlaying, setIsPlaying }) {

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <Box
      onClick={handlePlayPause}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <PlayArrowIcon sx={{
        display: isPlaying ? 'none' : 'block',
        fontSize: '3rem'
      }} />
      <PauseIcon sx={{
        display: isPlaying ? 'block' : 'none',
        fontSize: '3rem'
      }} />
    </Box>
  )
}