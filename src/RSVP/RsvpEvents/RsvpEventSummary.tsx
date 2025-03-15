import * as React from 'react';
import { useMediaQuery, Box, Typography, Paper, Button } from '@mui/material';
import { AddToCalendarButton, atcb_action } from 'add-to-calendar-button-react';
import theme from '../../theme';

type RsvpEventSummaryProps = {
  event: 'engagement' | 'wedding';
  rsvp: string | null;
  openRsvp: (event: string, rsvp: string | null) => void;
};

const eventDetails = {
  engagement: {
    title: 'Engagement Party',
    date: 'July 12, 2025 (Saturday)',
    time: '4:00pm-8:00pm + optional after-party',
    location: (
      <>
        The Stalking Horse
        <br />
        10543 W Pico Blvd, Los Angeles, CA 90064
      </>
    ),
  },
  wedding: {
    title: 'Wedding Event',
    date: 'December 6, 1997',
    time: '3:00pm-10:0pm + optional after-party',
    location: 'International Destination',
  },
};

const options: (
  | 'Apple'
  | 'Google'
  | 'Microsoft365'
  | 'Outlook.com'
  | 'Yahoo'
  | 'iCal'
  | 'MicrosoftTeams'
)[] = ['Apple', 'Google', 'Microsoft365', 'Outlook.com', 'Yahoo'];

const calendarConfig = {
  engagement: {
    name: `Anjela & Enrique's Engagement Party`,
    options: options,
    startDate: '2025-07-12',
    endDate: '2025-07-12',
    startTime: '16:00',
    endTime: '20:00',
    location: '10543 W Pico Blvd, Los Angeles, CA 90064',
    timeZone: 'America/Los_Angeles',
    availability: 'busy' as 'busy' | 'free',
    iCalFileName: 'anjela-enrique-engagement',
    hideBranding: true,
    description: `Celebration at the Stalking Horse![br] [url]https://the-veras.web.app/[/url]`,
  },
  wedding: {
    name: `Anjela & Enrique's Wedding Event`,
    options: options,
    startDate: '2025-07-12',
    endDate: '2025-07-12',
    startTime: '16:00',
    endTime: '20:00',
    location: 'International Destination',
    timeZone: 'America/Los_Angeles',
    availability: 'busy' as 'busy' | 'free',
    iCalFileName: 'anjela-enrique-wedding',
    hideBranding: true,
    description: `Let's celebrate![br] [url]https://the-veras.web.app/`,
  },
};

export const RsvpEventSummary = ({
  event,
  rsvp,
  openRsvp,
}: RsvpEventSummaryProps) => {
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const details = eventDetails[event];
  return (
    <Box style={{ padding: 24, display: 'flex', width: '100%' }}>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingLeft: isTablet ? 0 : 16,
          paddingRight: isTablet ? 0 : 16,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant={isTablet ? 'h5' : 'h4'}
          color={theme.palette.text.primary}
          style={{ paddingBottom: 8 }}
          align="center"
        >
          {details.title}
        </Typography>
        <Typography
          variant="body2"
          color={theme.palette.text.primary}
          style={{ paddingBottom: 4 }}
          align="center"
        >
          {details.date}
        </Typography>
        <Typography
          variant="body2"
          color={theme.palette.text.primary}
          style={{ paddingBottom: 4 }}
          align="center"
        >
          {details.time}
        </Typography>
        <Typography
          variant="body2"
          color={theme.palette.text.primary}
          style={{ paddingBottom: 4 }}
          align="center"
        >
          {details.location}
        </Typography>
        {rsvp && (
          <Paper
            elevation={0}
            variant="outlined"
            style={{
              width: '100%',
              padding: 12,
              background: 'transparent',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="body1"
              color={theme.palette.text.primary}
              style={{ border: '1px' }}
              align="center"
            >
              Your RSVP response:
              <br />
              <strong>
                {rsvp === 'accept' ? 'Attending' : 'Not Attending'}
              </strong>
            </Typography>
            {rsvp === 'accept' && (
              <Button
                variant="outlined"
                size="small"
                style={{ marginTop: 4, textTransform: 'capitalize' }}
                onClick={() => atcb_action(calendarConfig[event])}
              >
                Add to Calendar
              </Button>
            )}
          </Paper>
        )}
        <Button
          variant="contained"
          style={{
            marginTop: 12,
            paddingRight: 24,
            paddingLeft: 24,
            width: 'max-content',
          }}
          onClick={() => openRsvp(event, rsvp)}
        >
          {rsvp ? 'Change RSVP' : 'RSVP'}
        </Button>
      </Box>
    </Box>
  );
};
