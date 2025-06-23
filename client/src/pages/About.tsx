import React, { useState, useRef } from 'react';
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
import { School, Work, Circle, Code, DataObject, BarChart, TableChart, Functions, Hub, TrendingUp, Timeline, GroupWork, GitHub, TaskAlt, Cloud, Storage } from '@mui/icons-material';

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
  const [techTabValue, setTechTabValue] = useState(0);
  const [avatarOffset, setAvatarOffset] = useState({ x: 0, y: 0 });
  const avatarBoxRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleTechTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTechTabValue(newValue);
  };

  const education = [
    {
      title: "Fintech Program",
      institution: "University of Toronto",
      period: "07/2022 - 02/2023",
      description: "Accelerated computer science program specialized in financial technologies"
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
      title: "Software Engineer",
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

  const aiTech = [
    { name: "Python", icon: <DataObject sx={{ fontSize: 16, mr: 1 }} /> },
    { name: "Keras", icon: <Code sx={{ fontSize: 16, mr: 1 }} /> },
    { name: "SciKit-Learn", icon: <Code sx={{ fontSize: 16, mr: 1 }} /> },
    { name: "Matplotlib", icon: <BarChart sx={{ fontSize: 16, mr: 1 }} /> },
    { name: "Pandas", icon: <TableChart sx={{ fontSize: 16, mr: 1 }} /> },
    { name: "Logistic Regression", icon: <Functions sx={{ fontSize: 16, mr: 1 }} /> },
    { name: "RandomOverSampler", icon: <Functions sx={{ fontSize: 16, mr: 1 }} /> },
    { name: "Neural Network", icon: <Hub sx={{ fontSize: 16, mr: 1 }} /> },
    { name: "Linear Regression", icon: <TrendingUp sx={{ fontSize: 16, mr: 1 }} /> },
    { name: "Time Series", icon: <Timeline sx={{ fontSize: 16, mr: 1 }} /> },
    { name: "Ensemble Model", icon: <GroupWork sx={{ fontSize: 16, mr: 1 }} /> }
  ];

  const webDevTech = [
    { name: "Version Control (Git)", icon: <GitHub sx={{ fontSize: 16, mr: 1 }} /> },
    { name: "Jira", icon: <TaskAlt sx={{ fontSize: 16, mr: 1 }} /> },
    { name: "Azure DevOps", icon: <Cloud sx={{ fontSize: 16, mr: 1 }} /> },
    { name: "React JS", icon: <Code sx={{ fontSize: 16, mr: 1 }} /> },
    { name: "Typescript", icon: <Code sx={{ fontSize: 16, mr: 1 }} /> },
    { name: "SQL Server", icon: <Storage sx={{ fontSize: 16, mr: 1 }} /> },
    { name: "ASP.NET Core MVC", icon: <Code sx={{ fontSize: 16, mr: 1 }} /> }
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
        mb: 6,
      }}>
        <Box sx={{ position: 'relative', mb: 4, transform: { xs: 'translateX(0)', md: 'translateX(40px)' } }}>
          <Paper elevation={3} sx={{
            width: { xs: 280, md: 320 },
            height: { xs: 280, md: 320 },
            borderRadius: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            p: 4,
            border: `3px solid ${theme.palette.mode === 'dark' ? '#424242' : '#111'}`,
            background: theme.palette.mode === 'dark' ? '#333' : '#fff',
            color: theme.palette.mode === 'dark' ? '#fff' : '#111',
            position: 'relative',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-19px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              border: '20px solid transparent',
              borderTopColor: theme.palette.mode === 'dark' ? '#424242' : '#111',
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
              borderTopColor: theme.palette.mode === 'dark' ? '#333' : '#fff',
              borderBottom: 0,
              zIndex: 1,
            }
          }}>
            <Typography variant="body2" paragraph sx={{ mb: 1 }}>
              Hi! I love getting the job done nice, done fast and done well.
            </Typography>
            <Typography variant="body2" paragraph sx={{ mb: 1 }}>
              Outside of work, I like to test new technologies to add to my Pokémon TCG decks, research stocks to add to my portfolio, and read fantasy novels. 
              My favorite genres: overpowered mc, face-slapping, martial arts, regressor, and failing upwards.
            </Typography>
          </Paper>
        </Box>
        <Box
          ref={avatarBoxRef}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 220,
            position: 'relative',
            overflow: 'visible',
          }}
        >
          <img
            src="/images/Avatar.png"
            alt="Avatar of Justin Tran"
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              position: 'relative',
              transform: `translate(${avatarOffset.x}px, ${avatarOffset.y}px)`,
              transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
              cursor: 'pointer',
            }}
            onClick={() => {
              const box = avatarBoxRef.current;
              if (!box) return;
              const boxRect = box.getBoundingClientRect();
              // Allow movement within the box, but keep avatar fully visible
              const maxX = (boxRect.width - 200) / 2;
              const maxY = (boxRect.height - 200) / 2;
              const x = Math.floor(Math.random() * (maxX * 2 + 1)) - maxX;
              const y = Math.floor(Math.random() * (maxY * 2 + 1)) - maxY;
              setAvatarOffset({ x, y });
            }}
          />
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
                    <Circle sx={{ color: tabValue === 0 ? 'accent.main' : 'grey.400', fontSize: 16, transition: 'color 0.3s' }} />
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
                   <Circle sx={{ color: tabValue === 1 ? 'accent.main' : 'grey.400', fontSize: 16, transition: 'color 0.3s' }} />
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

      <Paper elevation={3} sx={{ width: '100%', mt: 4 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={techTabValue} 
            onChange={handleTechTabChange} 
            aria-label="technologies tabs"
            variant="fullWidth"
          >
            <Tab icon={<DataObject />} label="AI/Data Analyst" iconPosition="start" />
            <Tab icon={<Code />} label="Web Dev" iconPosition="start" />
          </Tabs>
        </Box>
        <TabPanel value={techTabValue} index={0}>
          <Box sx={{ maxHeight: '20vh', overflowY: 'auto', p: 2 }}>
            {aiTech.map((tech, index) => (
              <Box key={index} sx={{ position: 'relative', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Circle sx={{ color: techTabValue === 0 ? 'accent.main' : 'grey.400', fontSize: 12, mr: 2, transition: 'color 0.3s' }} />
                  <Card sx={{ flex: 1, boxShadow: 3 }}>
                    <CardContent sx={{ p: '8px !important', display: 'flex', alignItems: 'center' }}>
                      {tech.icon}
                      <Typography variant="body2">{tech.name}</Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Box>
            ))}
          </Box>
        </TabPanel>
        <TabPanel value={techTabValue} index={1}>
          <Box sx={{ maxHeight: '20vh', overflowY: 'auto', p: 2 }}>
            {webDevTech.map((tech, index) => (
              <Box key={index} sx={{ position: 'relative', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Circle sx={{ color: techTabValue === 1 ? 'accent.main' : 'grey.400', fontSize: 12, mr: 2, transition: 'color 0.3s' }} />
                  <Card sx={{ flex: 1, boxShadow: 3 }}>
                    <CardContent sx={{ p: '8px !important', display: 'flex', alignItems: 'center' }}>
                      {tech.icon}
                      <Typography variant="body2">{tech.name}</Typography>
                    </CardContent>
                  </Card>
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