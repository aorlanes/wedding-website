import * as React from 'react';
import theme from '../theme';
import { Card, CardMedia, Typography, useMediaQuery } from '@mui/material';
import { timelineMapping } from './TimelineMapping';
import Container from '../components/Container';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Carousel from '../components/Carousel';

const OurStoryPage = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const slides = (photos: string[]) =>
    photos.map((photo, index) => {
      return (
        <Card key={`${photo}-${index}`}>
          <CardMedia style={{ width: 256, height: 256, display: 'flex' }}>
            <img
              loading="lazy"
              src={photo}
              alt={photo}
              style={{ objectFit: 'cover', width: 256, height: 256 }}
            />
          </CardMedia>
        </Card>
      );
    });

  return (
    <Container>
      <Typography
        variant={isTablet ? 'h4' : 'h3'}
        color="primary"
        style={{ paddingBottom: 16, textAlign: 'center' }}
      >
        Our Story
      </Typography>
      <Typography variant="body1">
        <strong>Our story starts in 2021!</strong>
        <br />
        Anjela moved to LA in 2020 and after the pandemic she decided to become
        a personal trainer at the local gym in hopes to meet people and make new
        friends. Enrique, who had just returned to his hometown earlier that
        year from living in Austin, was a regular at the same gym. It was
        Noe—Enrique’s brother and Anjela’s coworker—who introduced them. And
        from there, everything fell into place!
      </Typography>
      <Box
        style={{ display: 'flex', justifyContent: 'center', paddingTop: 16 }}
      >
        <Stepper orientation="vertical">
          {timelineMapping.map((event) => (
            <Step key={event.label} expanded={true} active={true}>
              <StepLabel icon={<FavoriteIcon />}>
                <Typography variant="h5" style={{ paddingTop: 8 }}>
                  {event.label}
                </Typography>
              </StepLabel>
              <StepContent>
                <Box
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: isTablet ? 'column' : 'row',
                  }}
                >
                  {event.photos && event.photos.length > 0 && (
                    <Carousel
                      items={slides(event.photos)}
                      displayCount={1}
                      slideByCount={1}
                      variant="dots"
                    />
                  )}
                  <Typography
                    variant="h6"
                    style={{
                      maxWidth: 256,
                      textAlign: isTablet ? 'center' : 'left',
                      paddingLeft: isTablet ? 0 : 24,
                    }}
                  >
                    {event.description}
                  </Typography>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Container>
  );
};

export default OurStoryPage;
