import '../App.css';
import theme from '../theme';
import { Button, Icon, Typography, useMediaQuery } from '@mui/material';
import Container from '../components/Container';
import { ServicesMapping } from './ServicesMapping';
import * as React from 'react';
import InfoCardLarge from '../components/InfoCardLarge';

const ServicesPage = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const contactButtons = (
    <div
      style={{
        display: 'flex',
        flexDirection: isTablet ? 'column' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingBottom: 48,
      }}
    >
      <Button
        variant="contained"
        size="large"
        style={{ width: 256, marginTop: 12, marginRight: isTablet ? 0 : 12 }}
        href="tel:3235555555"
      >
        <Icon fontSize="small" style={{ marginRight: 5 }}>
          phone_rounded
        </Icon>
        Call Now
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{
          width: 256,
          marginTop: 12,
        }}
        href="mailto:veraandsonscc@example.com"
      >
        <Icon fontSize="small" style={{ marginRight: 5 }}>
          mail_outline_rounded
        </Icon>
        Email Us
      </Button>
    </div>
  );

  return (
    <Container>
      <>
        <Typography
          variant={isTablet ? 'h4' : 'h3'}
          color="secondary"
          style={{ paddingBottom: 16, textAlign: 'center' }}
        >
          Our Services
        </Typography>
        <Typography
          variant={isTablet ? 'subtitle2' : 'subtitle1'}
          color={theme.palette.text.primary}
          style={{ textAlign: 'center', paddingBottom: 8 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Typography>
        {contactButtons}
        {ServicesMapping.map((service, index) => {
          return (
            <InfoCardLarge
              key={index}
              alignment={index % 2 === 0 ? 'RIGHT' : 'LEFT'}
              title={service.title}
              text={service.text}
              itemList={service.servicesList}
              image={service.image}
            />
          );
        })}
        <Typography
          variant={isTablet ? 'subtitle2' : 'subtitle1'}
          color={theme.palette.text.primary}
          style={{ textAlign: 'center', paddingBottom: 8 }}
        >
          Interested in any of our services? Get a free quote now!
        </Typography>
        {contactButtons}
      </>
    </Container>
  );
};

export default ServicesPage;
