import { Button, Typography, useMediaQuery } from '@mui/material';
import theme from '../theme';
import Container from '../components/Container';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeEvents = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const events = [
    {
      title: 'Engagement Party',
      subtitle: 'July 12, 2025 | Los Angeles, CA',
      text: 'Join us as we celebrate our engagement and the beginning of our new adventure together! Please RSVP below for more details.',
      button: {
        text: 'RSVP',
        isDisabled: false,
        path: '/rsvp/engagement',
      },
    },
    {
      title: 'Wedding Event',
      subtitle: 'Stay tuned!',
      text: 'We are still in the planning phase. Once details have been announced, those who receive an invitation will be able to RSVP here.',
      button: {
        text: 'Coming soon!',
        isDisabled: true,
        path: '/rsvp/wedding',
      },
    },
  ];

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant={isTablet ? 'h4' : 'h3'} color="primary">
        Our Celebration
      </Typography>
      <Typography variant="body1" color="primary">
        We are thrilled to announce that we're getting married! While we've
        decided on an intimate ceremony for our wedding, we would love to
        celebrate this joyous occassion with all our dearest friends and family.
      </Typography>
      <Typography variant="body1" color="primary" style={{ paddingTop: 12 }}>
        We cordially invite you to join us for an engagement party to mark the
        beginning of our new journey. Your presence would mean the world to us
        as we celebrate our love and the exciting adventures that lie ahead.
      </Typography>
      <Typography variant="body1" color="primary" style={{ paddingTop: 12 }}>
        With love,
        <br />
        Anjela & Enrique
      </Typography>
      <div
        style={{
          display: 'flex',
          flexDirection: isTablet ? 'column' : 'row',
        }}
      >
        {events.map((att, index) => {
          return <Event key={index} {...att} />;
        })}
      </div>
    </Container>
  );
};

type EventProps = {
  title: string;
  subtitle: string;
  text: string;
  button: {
    text: string;
    isDisabled: boolean;
    path: string;
  };
};

const Event = ({ title, subtitle, text, button }: EventProps) => {
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: isTablet ? 0 : 16,
        paddingRight: isTablet ? 0 : 16,
        width: '100%',
        alignItems: 'center',
      }}
    >
      <Typography
        variant={isTablet ? 'h5' : 'h4'}
        color={theme.palette.text.primary}
        style={{ paddingTop: 32, paddingBottom: 8 }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        color={theme.palette.text.primary}
        style={{ paddingBottom: 4 }}
      >
        {subtitle}
      </Typography>
      <Typography
        variant="body1"
        color={theme.palette.text.primary}
        style={{ paddingBottom: 12 }}
      >
        {text}
      </Typography>
      <Button
        variant="contained"
        disabled={button.isDisabled}
        style={{
          marginTop: 'auto',
          paddingRight: 24,
          paddingLeft: 24,
          width: 'max-content',
        }}
        onClick={() => navigate(button.path)}
      >
        {button.text}
      </Button>
    </div>
  );
};

export default HomeEvents;
