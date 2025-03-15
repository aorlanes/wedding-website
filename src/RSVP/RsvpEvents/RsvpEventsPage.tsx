import * as React from 'react';
import Container from '../../components/Container';
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from '@mui/material';
import theme from '../../theme';
import { useNavigate, useParams } from 'react-router-dom';
import { guestEntities } from '../MockRsvpData';
import { RsvpEventsModal } from './RsvpEventsModal';
import { RsvpEventSummary } from './RsvpEventSummary';
import PersonIcon from '@mui/icons-material/Person';

export type ModalInfo = {
  event: 'engagement' | 'wedding';
  rsvp: string | null;
  id: string;
  firstName: string;
  lastName: string;
};

const RsvpEventsPage = () => {
  let { id } = useParams();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [guest, setGuest] = React.useState<GuestEntity>();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState<ModalInfo>();
  const navigate = useNavigate();

  React.useEffect(() => {
    getGuestData(id);
  }, [id]);

  // MOCK - API DATA RETRIEVAL
  const getGuestData = (id: string) => {
    let guest = guestEntities.find((guest) => id === guest.id);
    if (!!guest) {
      setGuest(guest);
    } else {
      navigate('/error');
    }
  };

  const openRsvp = (event: 'engagement' | 'wedding', rsvp: string | null) => {
    setModalInfo({
      event: event,
      rsvp: rsvp,
      id: guest?.id,
      firstName: guest?.firstName,
      lastName: guest?.lastName,
    });
    setModalOpen(true);
  };

  return (
    <Container>
      <Typography
        variant={isTablet ? 'h4' : 'h3'}
        color="primary"
        style={{ textAlign: 'center', paddingBottom: 16 }}
      >
        Events
      </Typography>
      <Typography variant="body1" align="center">
        Hi {guest?.firstName}, we are so excited to be celebrating with you!
        Here are your RSVP options:
      </Typography>
      <Box
        style={{
          display: 'flex',
          flexDirection: isTablet ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: isTablet ? 'center' : 'flex-start',
          paddingTop: 12,
        }}
      >
        {guest?.events.map((event, index) => {
          return (
            <RsvpEventSummary
              openRsvp={openRsvp}
              key={index}
              event={event.event}
              rsvp={event.rsvp}
            />
          );
        })}
      </Box>
      {guest?.guests.length > 0 && (
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="body1"
            align="center"
            style={{
              paddingTop: 24,
            }}
          >
            You may also RSVP for those in your group:
          </Typography>
          <Box style={{ width: 'max-content', paddingTop: 12 }}>
            {guest?.guests.map((item, index) => {
              return (
                <Box
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: isTablet ? 'column' : 'row',
                    alignItems: 'center',
                    paddingBottom: 12,
                    justifyContent: 'space-between',
                  }}
                >
                  <Box style={{ display: 'flex', paddingRight: 32 }}>
                    <PersonIcon style={{ paddingRight: 8 }} />
                    <ListItemText
                      primary={`${item.firstName} ${item.lastName}`}
                    />
                  </Box>
                  <Box
                    style={{
                      display: 'flex',
                      flexDirection: isTablet ? 'column' : 'row',
                      alignItems: 'center',
                    }}
                  >
                    {item.events.map((event, index) => {
                      return (
                        <Button
                          key={index}
                          variant="outlined"
                          size="small"
                          style={{
                            margin: 4,
                            width: 'max-content',
                          }}
                          onClick={() => {
                            setModalInfo({
                              event: event.event,
                              rsvp: event.rsvp,
                              id: item.id,
                              firstName: item.firstName,
                              lastName: item.lastName,
                            });
                            setModalOpen(true);
                          }}
                        >
                          {event.rsvp
                            ? `Change ${event.event} RSVP`
                            : `${event.event} RSVP`}
                        </Button>
                      );
                    })}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      )}
      {modalOpen && (
        <RsvpEventsModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          modalInfo={modalInfo}
        />
      )}
    </Container>
  );
};

export default RsvpEventsPage;
