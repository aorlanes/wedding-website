import { Typography, Button, useMediaQuery } from '@mui/material';
import theme from '../theme';
import bgImg from '../assets/AE1.jpg';
import Container from '../components/Container';
import * as React from 'react';

const HomeHeader = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div style={{ height: 600 }}>
      <div
        style={{
          position: 'absolute',
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          display: 'flex',
          width: '100%',
          height: 'inherit',
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          backgroundImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 60%, transparent',
        }}
      >
        <Container
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            paddingTop: '64px',
          }}
        >
          <Typography
            variant={isMobile ? 'h4' : 'h2'}
            color={theme.palette.secondary.main}
          >
            Anjela & Enrique
          </Typography>
          <Typography
            variant="subtitle2"
            color={theme.palette.secondary.main}
            style={{ marginTop: 16 }}
          >
            Date to Be Announced
          </Typography>
        </Container>
      </div>
    </div>
  );
};

export default HomeHeader;
