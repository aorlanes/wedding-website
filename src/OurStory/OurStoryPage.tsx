import '../App.css';
import theme from '../theme';
import { Typography, useMediaQuery } from '@mui/material';
import { AboutMapping } from './AboutMapping';
import Container from '../components/Container';
import * as React from 'react';
import InfoCardLarge from '../components/InfoCardLarge';

const OurStoryPage = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container>
      <>
        <Typography
          variant={isTablet ? 'h4' : 'h3'}
          color="secondary"
          style={{ paddingBottom: 16, textAlign: 'center' }}
        >
          About Us
        </Typography>
        <Typography
          variant={isTablet ? 'subtitle2' : 'subtitle1'}
          color={theme.palette.text.primary}
          style={{ textAlign: 'center', paddingBottom: 24 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Typography>
        {AboutMapping.map((item, index) => {
          return (
            <InfoCardLarge
              key={index}
              alignment={index % 2 === 0 ? 'RIGHT' : 'LEFT'}
              title={item.title}
              text={item.text}
              image={item.image}
            />
          );
        })}
      </>
    </Container>
  );
};

export default OurStoryPage;
