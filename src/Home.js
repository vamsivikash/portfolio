import React from 'react';
import {
  Container,
  Paper,
  Button,
} from '@mui/material';
import About from "./About";
import Experience from "./ShortExperience";
import vamsiResume from "./assets/VamsiVikashAnkam.pdf";

function Home() {
   
  const handleDownload = () => {

    // Create an anchor element
    const downloadLink = document.createElement('a');
    downloadLink.href = vamsiResume;
    downloadLink.target = '_blank'; // Open the link in a new tab
    downloadLink.download = "VamsiVikash_Resume.pdf"; // Specify the downloaded file name

    // Simulate a click event to trigger the download
    downloadLink.click();
  };

  return (
    <div>
      <Container maxWidth="md" style={{ marginTop: '2rem' }}>
        <Paper elevation={3} style={{ padding: '2rem' }}>
          
          <About /> 

          <Experience />

          <Button
            variant="contained" color="primary" style={{ marginTop: '1rem' }}
            onClick={handleDownload}
          >
            Download Resume
          </Button>
        </Paper>
      </Container>
    </div>
  );
}

export default Home;
