import '../App.css';
import theme from '../theme';
import {
  Button,
  Divider,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Container from '../components/Container';
import * as React from 'react';

const ContactPage = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Container>
      <Typography
        variant={isTablet ? 'h4' : 'h3'}
        color="secondary"
        style={{ paddingBottom: 16, textAlign: 'center' }}
      >
        Contact Us
      </Typography>
      <Typography
        variant={isTablet ? 'subtitle2' : 'subtitle1'}
        color={theme.palette.text.primary}
        style={{ textAlign: 'center', paddingBottom: 8 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </Typography>
      <div
        style={{
          display: 'flex',
          flexDirection: isTablet ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          paddingBottom: 32,
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
      <Divider />
      <div>
        <List
          style={{
            display: 'flex',
            flexDirection: isTablet ? 'column' : 'row',
          }}
        >
          <ListItem
            disablePadding
            style={{
              justifyContent: isTablet ? 'flex-start' : 'center',
              padding: 4,
            }}
          >
            <ListItemIcon style={{ minWidth: 36 }}>
              <Icon fontSize="small">phone_rounded</Icon>
            </ListItemIcon>
            <Typography>1-(323)-555-5555</Typography>
          </ListItem>
          <ListItem
            disablePadding
            style={{
              justifyContent: isTablet ? 'flex-start' : 'center',
              padding: 4,
            }}
          >
            <ListItemIcon style={{ minWidth: 36 }}>
              <Icon fontSize="small">mail_outline_rounded</Icon>
            </ListItemIcon>
            <Typography>veraandsonscc@example.com</Typography>
          </ListItem>
          <ListItem
            disablePadding
            style={{
              justifyContent: isTablet ? 'flex-start' : 'center',
              padding: 4,
            }}
          >
            <ListItemIcon style={{ minWidth: 36 }}>
              <Icon fontSize="small">place_rounded</Icon>
            </ListItemIcon>
            <Typography>
              Vera &amp; Sons <br /> PO Box 123 <br /> Los Angeles, CA 90034
            </Typography>
          </ListItem>
        </List>
      </div>
    </Container>
  );
};

export default ContactPage;
