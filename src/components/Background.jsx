import treeImage from '../assets/background.png';

export default function Background() {
  return (
    <div
      style={{
        backgroundImage: `url(${treeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: {xs: 'center', md: 'top'},
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        opacity: 0.3,
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
}