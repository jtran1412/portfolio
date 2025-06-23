import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';

const projects = [
  { title: 'Project One', description: 'Description for project one.', link: '#', image: '/images/project1.png' },
  { title: 'Project Two', description: 'Description for project two.', link: '#', image: '/images/project2.png' },
  { title: 'Project Three', description: 'Description for project three.', link: '#', image: '/images/project3.png' },
  { title: 'Project Four', description: 'Description for project four.', link: '#', image: '/images/project4.png' },
];

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
      <Typography variant="h3" component="h2" gutterBottom>
        Projects
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center', mt: 4 }}>
        {/* Top row */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          {projects.slice(0, 2).map((project, idx) => (
            <Card key={idx} sx={{ width: 260, minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>{project.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{project.description}</Typography>
                <Box sx={{ height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img src={project.image} alt={project.title} style={{ height: 48, borderRadius: 8, cursor: 'pointer' }} />
                  </a>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
        {/* Bottom row */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          {projects.slice(2, 4).map((project, idx) => (
            <Card key={idx} sx={{ width: 260, minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>{project.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{project.description}</Typography>
                <Box sx={{ height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img src={project.image} alt={project.title} style={{ height: 48, borderRadius: 8, cursor: 'pointer' }} />
                  </a>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Projects; 