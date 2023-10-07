import React from 'react';
import {
  Typography,
  Container,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material';

function Conferences() {
  return (
    <Container maxWidth="md">
    <section id="projects">
      <Typography variant="h4" style={{ marginTop: '2rem' }} gutterBottom>
          Public Conferences Presented
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

export default Conferences;
