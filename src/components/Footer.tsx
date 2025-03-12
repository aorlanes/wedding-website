import { useNavigate } from 'react-router-dom';
import Container from './Container';
import theme from '../theme';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton, Typography } from '@mui/material';
import * as React from 'react';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: '100%',
        background: theme.palette.primary.main,
        color: theme.palette.text.primary,
        textAlign: 'center',
      }}
    >
      <Container
        style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 32,
          paddingBottom: 32,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Typography
            variant="h3"
            style={{
              color: theme.palette.primary.light,
              cursor: 'pointer',
              marginTop: '20px',
            }}
            onClick={() => navigate('/')}
          >
            A&E
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            width: 128,
            justifyContent: 'space-between',
            color: theme.palette.secondary.main,
            alignItems: 'center',
          }}
        >
          <Typography variant="caption">A:</Typography>
          <IconButton
            color="secondary"
            href="https://www.instagram.com/damnnnnjela/"
            target="_blank"
          >
            <InstagramIcon fontSize="medium" />
          </IconButton>
          <IconButton
            color="secondary"
            href="https://www.linkedin.com/in/anjela-orlanes/"
            target="_blank"
          >
            <LinkedInIcon fontSize="medium" />
          </IconButton>
          |
          <Typography variant="caption" style={{ paddingLeft: 8 }}>
            E:
          </Typography>
          <IconButton
            color="secondary"
            href="https://www.instagram.com/enrique_vera_/"
            target="_blank"
          >
            <InstagramIcon fontSize="medium" />
          </IconButton>
          <IconButton
            color="secondary"
            href="https://www.linkedin.com/in/enrique-vera/"
            target="_blank"
          >
            <LinkedInIcon fontSize="medium" />
          </IconButton>
        </div>
        <Typography
          variant="caption"
          style={{ paddingTop: 4, color: theme.palette.primary.light }}
        >
          Created by Anjela Orlanes (Software Engineer and Bride-to-Be)
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
