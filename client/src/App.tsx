import { Box, CssBaseline, IconButton } from '@mui/material';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import { Brightness4, Brightness7, VolumeUp, VolumeOff } from '@mui/icons-material';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { MusicContext } from './context/MusicContext';

function App() {
  const { mode, toggleColorMode } = useContext(ThemeContext);
  const { isPlaying, togglePlay } = useContext(MusicContext);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'center', width: '100vw' }}>
      <CssBaseline />
      <Box sx={{ position: 'fixed', top: 16, right: 16, zIndex: 1300, display: 'flex', gap: 1 }}>
        <IconButton onClick={togglePlay} color="inherit" aria-label="toggle mute" sx={{ '&:hover': { color: 'accent.main' } }}>
          {isPlaying ? <VolumeUp /> : <VolumeOff />}
        </IconButton>
        <IconButton onClick={toggleColorMode} color="inherit" aria-label="toggle light/dark mode" sx={{ '&:hover': { color: 'accent.main' } }}>
          {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, width: '100%', maxWidth: 600, margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
        <section id="home" style={{ width: '100%' }}>
          <Home />
        </section>
        <section id="about" style={{ width: '100%' }}>
          <About />
        </section>
        <section id="projects" style={{ width: '100%' }}>
          <Projects />
        </section>
      </Box>
    </Box>
  );
}

export default App; 