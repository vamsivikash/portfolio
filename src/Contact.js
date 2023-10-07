import React from 'react';
import { Container, Typography, Grid, Link, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import BuyMeACoffeeButton from './BuyMeACoffee';

function Contact() {
  return (
    <React.Fragment>  
      <Container maxWidth="md">
        <section id="contact">
          <Typography variant="h4">Contact</Typography>
          <Typography variant="body1">
            Feel free to reach out to me through any of the following contact details:
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <Link href="mailto:vamsivikash@gmail.com">vamsivikash@gmail.com</Link>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <Link href="tel:919-592-3256">919-592-3256</Link>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LinkedInIcon color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <Link href="https://www.linkedin.com/in/vamsivikash" target="_blank" rel="noopener noreferrer">vamsivikash</Link>
                </ListItemText>
              </ListItem>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ListItem>
                <ListItemIcon>
                  <GitHubIcon color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <Link href="https://github.com/vamsivikash" target="_blank" rel="noopener noreferrer">vamsivikash</Link>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <TwitterIcon color="primary" />
                </ListItemIcon>
                <ListItemText>
                  <Link href="https://twitter.com/vamsi_vikash" target="_blank" rel="noopener noreferrer">@vamsi_vikash</Link>
                </ListItemText>
              </ListItem>
            </Grid>
          </Grid>
        </section>
      </Container>
      <BuyMeACoffeeButton />
        
    </React.Fragment>
  );
}

export default Contact;
