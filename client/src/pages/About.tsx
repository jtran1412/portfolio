import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Tabs, 
  Tab, 
  Paper,
  Card,
  CardContent,
  useTheme
} from '@mui/material';
import { School, Work, Circle } from '@mui/icons-material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const About: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const education = [
    {
      title: "Fintech Program",
      institution: "University of Toronto",
      period: "07/2022 - 02/2023",
      description: "Specialized program in financial technology"
    },
    {
      title: "Bachelor of Kinesiology",
      institution: "University",
      period: "09/2012 - 05/2016",
      description: "Bachelor's degree in Kinesiology"
    }
  ];

  const experience = [
    {
      title: "Intern",
      company: "Winmagic",
      period: "01/2025 - Present",
      description: "Current internship position"
    },
    {
      title: "Physician Assistant",
      company: "Provis-Rudd",
      period: "01/2019 - 04/2025",
      description: "Healthcare role as physician assistant"
    },
    {
      title: "Life Insurance Agent",
      company: "Greatway Financial",
      period: "01/2018 - 01/2019",
      description: "Insurance sales and client management"
    },
    {
      title: "Sales Rep",
      company: "Rogers",
      period: "01/2017 - 01/2018",
      description: "Sales representative role"
    },
    {
      title: "Customer Service",
      company: "Nails R Us",
      period: "01/2016 - 01/2017",
      description: "Customer service position"
    }
  ];

  return (
    <Container 
      maxWidth="lg"
      sx={{ 
        minHeight: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        py: 4
      }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mb: 6
      }}>
        <Box sx={{
          position: 'relative',
          mb: 4,
          transform: { xs: 'translateX(0)', md: 'translateX(40px)' }
        }}>
          <Paper elevation={3} sx={{
            width: { xs: 280, md: 320 },
            height: { xs: 280, md: 320 },
            borderRadius: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            p: 4,
            border: '3px solid #111',
            background: '#fff',
            color: '#111',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-19px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              border: '20px solid transparent',
              borderTopColor: '#111',
              borderBottom: 0,
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              bottom: '-16px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              border: '20px solid transparent',
              borderTopColor: '#fff',
              borderBottom: 0,
              zIndex: 1,
            }
          }}>
            <Typography variant="body2" paragraph sx={{ mb: 1 }}>
              Hi! I love making things that look nice and avoiding hours of stressful debugging. That's why I love typescript.
            </Typography>
            <Typography variant="body2" paragraph sx={{ mb: 1 }}>
              Outside of work, I test new Pokémon TCG decks, research stocks, and read fantasy novels.
            </Typography>
            <Typography variant="body2">
              My favorite genres: overpowered mc, face-slapping, martial arts, regressor, and failing upwards.
            </Typography>
          </Paper>
        </Box>
      </Box>

      <Paper elevation={3} sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange} 
            aria-label="education and experience tabs"
            variant="fullWidth"
          >
            <Tab icon={<School />} label="Education" iconPosition="start" />
            <Tab icon={<Work />} label="Experience" iconPosition="start" />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <Box sx={{ maxHeight: '40vh', overflowY: 'auto', pr: 2 }}>
            {education.map((item, index) => (
              <Box key={index} sx={{ position: 'relative', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 2, mt: 1 }}>
                    <Circle sx={{ 
                      color: theme.palette.accent.main, 
                      fontSize: 16, 
                      transition: 'color 0.2s',
                      cursor: 'pointer',
                      '&:hover': {
                        color: theme.palette.secondary.main,
                      },
                    }} />
                    {index < education.length - 1 && (
                      <Box sx={{ width: 2, height: 60, bgcolor: 'grey.300', mt: 1 }} />
                    )}
                  </Box>
                  <Card sx={{ flex: 1, ml: 2 }}><CardContent>
                    <Typography variant="h6" gutterBottom>{item.title}</Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>{item.institution}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{item.period}</Typography>
                    <Typography variant="body2">{item.description}</Typography>
                  </CardContent></Card>
                </Box>
              </Box>
            ))}
          </Box>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <Box sx={{ maxHeight: '40vh', overflowY: 'auto', pr: 2 }}>
            {experience.map((item, index) => (
               <Box key={index} sx={{ position: 'relative', mb: 3 }}>
               <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                 <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 2, mt: 1 }}>
                   <Circle sx={{ 
                     color: theme.palette.accent.main, 
                     fontSize: 16, 
                     transition: 'color 0.2s',
                     cursor: 'pointer',
                     '&:hover': {
                       color: theme.palette.secondary.main,
                     },
                   }} />
                   {index < experience.length - 1 && (
                     <Box sx={{ width: 2, height: 60, bgcolor: 'grey.300', mt: 1 }} />
                   )}
                 </Box>
                 <Card sx={{ flex: 1, ml: 2 }}><CardContent>
                   <Typography variant="h6" gutterBottom>{item.title}</Typography>
                   <Typography variant="body2" color="text.secondary" gutterBottom>{item.company}</Typography>
                   <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{item.period}</Typography>
                   <Typography variant="body2">{item.description}</Typography>
                 </CardContent></Card>
               </Box>
             </Box>
            ))}
          </Box>
        </TabPanel>
      </Paper>
    </Container>
  );
};

export default About; 