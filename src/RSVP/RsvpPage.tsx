import * as React from 'react';
import Container from '../components/Container';
import {
  useMediaQuery,
  Typography,
  Button,
  FormControl,
  TextField,
  Box,
  CircularProgress,
} from '@mui/material';
import theme from '../theme';
import { validNames } from './MockRsvpData';
import { useNavigate } from 'react-router-dom';

const RsvpPage = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [firstName, setFirstName] = React.useState<string>();
  const [lastName, setLastName] = React.useState<string>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  // MOCK - API CALL
  const findGuest = (firstName: string, lastName: string) => {
    const formattedName =
      firstName.trim().toLowerCase() + lastName.trim().toLowerCase();
    const nameFound = validNames.find((name) => {
      const validName =
        name.firstName.trim().toLowerCase() +
        name.lastName.trim().toLowerCase();
      if (validName === formattedName) {
        return name;
      }
    });
    return nameFound;
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (firstName && lastName) {
      setIsLoading(true);

      // MOCK - SIMULATE VERIFICATION
      setTimeout(() => {
        try {
          const guest = findGuest(firstName, lastName);
          setError(false);
          navigate(`events/${guest.id}`);
        } catch (error) {
          setError(true);
        }
        setIsLoading(false);
      }, 2000);
    }
  };

  return (
    <Container>
      <Typography
        variant={isTablet ? 'h4' : 'h3'}
        color="primary"
        style={{ textAlign: 'center', paddingBottom: 16 }}
      >
        RSVP
      </Typography>
      <Typography variant="body1" align="center">
        We’re thrilled to have you join us for our celebration!
        <br />
        To help us get everything ready for you, please let us know if you’ll be
        attending by entering your first and last name below.
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        style={{ display: 'flex', justifyContent: 'center', paddingTop: 24 }}
      >
        <FormControl
          style={{ margin: 3, justifyContent: 'center' }}
          variant="outlined"
        >
          <Box
            style={{
              display: 'flex',
              flexDirection: isTablet ? 'column' : 'row',
            }}
          >
            <TextField
              label={<Typography color="primary">First Name</Typography>}
              color="primary"
              style={{ margin: 8 }}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              label={<Typography color="primary">Last Name</Typography>}
              color="primary"
              onChange={(e) => setLastName(e.target.value)}
              style={{ margin: 8 }}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            disabled={!firstName || !lastName || isLoading}
            style={{
              width: 'fit-content',
              minWidth: 200,
              marginTop: 16,
              alignSelf: 'center',
            }}
          >
            {isLoading ? (
              <CircularProgress size={24} color="secondary" />
            ) : (
              'Submit'
            )}
          </Button>
          {error && (
            <Typography style={{ alignSelf: 'center', paddingTop: 16 }}>
              There was an error finding your info.
            </Typography>
          )}
        </FormControl>
      </Box>
      <Typography variant="body1" align="center" style={{ paddingTop: 24 }}>
        You'll also be able to see the details of your RSVP. If you're
        responding for you and a guest(s), you'll be able to RSVP for your
        entire group.
      </Typography>
    </Container>
  );
};

export default RsvpPage;
