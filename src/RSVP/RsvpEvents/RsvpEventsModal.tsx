import {
  useMediaQuery,
  Dialog,
  Typography,
  Box,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  CircularProgress,
} from '@mui/material';
import * as React from 'react';
import theme from '../../theme';
import { ModalInfo } from './RsvpEventsPage';
import CloseIcon from '@mui/icons-material/Close';

type RsvpModalProps = {
  modalOpen: boolean;
  setModalOpen: (_: boolean) => void;
  modalInfo: ModalInfo;
};

export const RsvpEventsModal = ({
  modalOpen,
  setModalOpen,
  modalInfo,
}: RsvpModalProps) => {
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [rsvp, setRsvp] = React.useState(modalInfo.rsvp);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleSubmit = (event: 'engagement' | 'wedding', rsvp: string) => {
    setIsLoading(true);

    // MOCK - API SUBMIT
    setTimeout(() => {
      try {
        // success
        console.log('id: ', modalInfo.id);
        console.log('event: ', event);
        console.log('rsvp: ', rsvp);
        setModalOpen(false);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 'auto',
          maxHeight: 600,
          padding: isTablet ? 32 : 48,
          position: 'relative',
          textAlign: 'center',
          background: theme.palette.secondary.light,
        }}
      >
        <CloseIcon
          style={{
            position: 'absolute',
            zIndex: 5,
            right: 16,
            top: 16,
            cursor: 'pointer',
          }}
          onClick={() => setModalOpen(false)}
        />
        <Typography variant="h4">
          {modalInfo.event === 'engagement'
            ? 'Engagement Party'
            : 'Wedding Event'}
        </Typography>
        <Typography variant="body2" style={{ paddingTop: 8 }}>
          {`${modalInfo.firstName} ${modalInfo.lastName}`}
          <br />
          Current Status:{' '}
          <strong>
            {`${
              modalInfo.rsvp === 'accept'
                ? 'Attending'
                : modalInfo.rsvp === 'decline'
                ? 'Not Attending'
                : 'No Answer'
            }`}
          </strong>
        </Typography>
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(modalInfo.event, rsvp);
          }}
        >
          <FormControl variant="outlined">
            <RadioGroup name="rsvp">
              <FormControlLabel
                value="accept"
                control={
                  <Radio
                    checked={rsvp === 'accept'}
                    sx={{
                      color: theme.palette.primary.main,
                      '&.Mui-checked': {
                        color: theme.palette.primary.main,
                      },
                    }}
                    onChange={(e) => setRsvp(e.target.value)}
                  />
                }
                label="Attending"
              />
              <FormControlLabel
                value="decline"
                control={
                  <Radio
                    checked={rsvp === 'decline'}
                    sx={{
                      color: theme.palette.primary.main,
                      '&.Mui-checked': {
                        color: theme.palette.primary.main,
                      },
                    }}
                    onChange={(e) => setRsvp(e.target.value)}
                  />
                }
                label="Not Attending"
              />
            </RadioGroup>
            <Button
              disabled={!rsvp || rsvp === modalInfo.rsvp || isLoading}
              type="submit"
              variant="contained"
              style={{ marginTop: 8 }}
            >
              {isLoading ? (
                <CircularProgress size={24} color="secondary" />
              ) : (
                'Submit'
              )}
            </Button>
          </FormControl>
        </Box>
      </div>
    </Dialog>
  );
};
