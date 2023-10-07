import React from 'react';
import {
  Typography,
  Container,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material';

function Personal() {
  return (
    <Container maxWidth="md">
    <section id="projects">
      <Typography variant="h4" style={{ marginTop: '2rem' }} gutterBottom>
          Personal - Extracurricular, Volunteering, Interests,..etc
      </Typography>
      <Card>
          <CardHeader title="Under Construction" subheader="Apologize for the inconvenience" />
          <CardContent>
            Will be updated soon...
          </CardContent>
      </Card>
    </section> 
  </Container>
  );
}

export default Personal;
