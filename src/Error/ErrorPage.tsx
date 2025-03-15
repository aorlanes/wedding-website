import * as React from 'react';
import Container from '../components/Container';
import { useMediaQuery, Typography } from '@mui/material';
import theme from '../theme';

const ErrorPage = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container>
      <Typography
        variant={isTablet ? 'h4' : 'h3'}
        color="primary"
        style={{ textAlign: 'center', paddingBottom: 16 }}
      >
        Not Found
      </Typography>
      <Typography variant="body1">
        {'There was an issue loading the page.'}
      </Typography>
    </Container>
  );
};

export default ErrorPage;
