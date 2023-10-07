// Detailed experience needs to be added, more cards required!!

import React from 'react';
import {
  Typography,
  Container,
  Card,
  CardContent,
  CardHeader,
  Link
} from '@mui/material';


function Experience() {
  return (
    <Container maxWidth="md">
      <section id="experience">
        <Typography variant="h4" style={{ marginTop: '2rem' }} gutterBottom>
            Experience
        </Typography>
        <Card>
            <CardHeader 
              title="Sr. Solutions Architect" 
              subheader = {
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body1">Amazon Web Services, AWS</Typography>
                  <Typography variant="body1">June 2016 to Present</Typography>
                </div>
            }/> 
        
            <CardContent style={{ margin: "-2.5rem"}}> 
              <ul style = {{ margin: "2rem", lineHeight: "1.5rem"}} >
                <li style = {{ paddingBottom: "10px" }}> Demonstrated expertise in AWS Serverless technologies, serving as a subject matter expert in designing, implementing and building production grade enterprise architectures.  </li>
                <li style = {{ paddingBottom: "10px" }}> Pioneered revenue growth strategies by implementing strategic sales pathways for serverless solutions, achieving a remarkable year-on-year revenue increase of 23%. </li>
                <li style = {{ paddingBottom: "10px" }}> Fostered trust and played a pivotal role in the modernization of a multi-billion-dollar customer. Incrased their Serverless adoption by 8X and forming the Modernization division within their Cloud Center of Excellence (CCOE) </li>
                <li style = {{ paddingBottom: "10px" }}> Played a key role in elevating Serverless adoption by orchestrating strategic roadshows, enabling multiple customers simultaneously, fostering executive-level discussions, and crafting compelling Serverless content</li>
                <li style = {{ paddingBottom: "10px" }}> Spearheaded cross-team collaboration between Compute, Networking, and Serverless teams, bridging technical content gaps and streamlining complex solution delivery, resulting in reduction of technical roadblocks.</li>   
              </ul>
            </CardContent>
            <CardHeader 
              title="Learn More" 
              subheader = {
                <Link href="https://wwww.linkedin.com/in/vamsivikash" target="_blank" rel="noopener noreferrer">Linkedin</Link>  
            }/> 
        </Card>
        
      </section> 
    </Container>
  );
}

export default Experience;
