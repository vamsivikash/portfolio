import React from 'react';
import {
    Button, 
    Container,
    Card,
    CardContent,
  } from '@mui/material';
import { Link } from 'react-router-dom';
import Icon from '@mui/material/Icon';

function BuyMeACoffeeButton(){
    return (
        <div>
            <Container maxWidth="md" style={{ marginTop: '2rem' }}>
                <Card>
                    <CardContent>
                        <Link to="https://www.buymeacoffee.com/vamsivikash"  target="_blank" rel="noopener noreferrer"> 
                            <Button variant="contained" color="primary" startIcon={<Icon>local_cafe</Icon>} sx={{ padding: '8px 16px' }}>
                                Buy me a coffee
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
};

export default BuyMeACoffeeButton;
