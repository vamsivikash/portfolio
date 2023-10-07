// src/Portfolio.js
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
  Button,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material';

function Portfolio() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Your Name's Portfolio</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" style={{ marginTop: '2rem' }}>
        <Paper elevation={3} style={{ padding: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1">
            This is your about me section. Describe your skills, background, and interests here.
          </Typography>

          <Typography variant="h4" style={{ marginTop: '2rem' }} gutterBottom>
            Experience
          </Typography>
          <Card>
            <CardHeader title="Job Title" subheader="Company Name" />
            <CardContent>
              Describe your experience here.
            </CardContent>
          </Card>

          <Typography variant="h4" style={{ marginTop: '2rem' }} gutterBottom>
            Projects
          </Typography>
          <Card>
            <CardHeader title="Project Name" />
            <CardContent>
              Describe your projects here.
            </CardContent>
          </Card>

          <Typography variant="h4" style={{ marginTop: '2rem' }} gutterBottom>
            Contact
          </Typography>
          <Typography variant="body1">
            Contact information: email@example.com
          </Typography>

          <Button variant="contained" color="primary" style={{ marginTop: '1rem' }}>
            Download Resume
          </Button>
        </Paper>
      </Container>
    </div>
  );
}

export default Portfolio;