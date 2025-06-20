import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Projects: React.FC = () => {
  return (
    <Container 
      maxWidth="md"
      sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      <Box>
        <Typography variant="h3" component="h2" gutterBottom>
          Projects
        </Typography>
        <Typography variant="body1" color="textSecondary">
          My projects will be listed here soon.
        </Typography>
      </Box>
    </Container>
  );
};

export default Projects; 