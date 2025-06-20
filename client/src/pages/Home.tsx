import React from 'react';
import { Container, Typography, Box, Button, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Home: React.FC = () => {
  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      <Box>
        <Typography variant="h1" component="h1" sx={{ fontWeight: 'bold' }}>
          Justin Tran
        </Typography>
        <Typography variant="h4" color="textSecondary" gutterBottom>
          Software Engineer
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 1, mb: 2 }}>
          <LocationOnIcon sx={{ color: 'accent.main' }} />
          <Typography variant="body1" color="textSecondary" sx={{ ml: 1 }}>
            3 Fenelon Dr. Toronto, Ontario
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 2, mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'text.secondary' }}>
            <PhoneIcon sx={{ mr: 1, color: 'accent.main' }} />
            <Typography variant="body1" component="span" sx={{ color: 'inherit' }}>
              647-526-8553
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'text.secondary' }}>
            <EmailIcon sx={{ mr: 1, color: 'accent.main' }} />
            <Typography variant="body1" component="span" sx={{ color: 'inherit' }}>
              jtran1412@gmail.com
            </Typography>
          </Box>
        </Box>
        <Box>
          <Button 
            variant="contained" 
            color="accent"
            startIcon={<DownloadIcon />} 
            sx={{ mr: 2, '&:hover': { backgroundColor: 'accent.dark' } }}
            href="/resume.pdf"
            download
          >
            Resume
          </Button>
          <IconButton 
            aria-label="LinkedIn" 
            href="https://www.linkedin.com/in/justintranaboutme/"
            target="_blank"
            sx={{ color: 'accent.main', '&:hover': { color: 'accent.dark' } }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton 
            aria-label="GitHub" 
            href="https://github.com/jtran1412"
            target="_blank"
            sx={{ color: 'accent.main', '&:hover': { color: 'accent.dark' } }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default Home; 