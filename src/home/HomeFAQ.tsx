import * as React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import theme from '../theme';
import Container from '../components/Container';
import { faq } from '../FAQ/FaqMapping';

const HomeFAQ = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        variant={isTablet ? 'h4' : 'h3'}
        color="primary"
        style={{ paddingBottom: 24 }}
      >
        General Questions
      </Typography>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingBottom: 24,
        }}
      >
        {faq
          .filter((f) => f.category === 'general')
          .map((faq, index) => {
            return (
              <Accordion
                key={index}
                style={{
                  background: theme.palette.secondary.light,
                  marginBottom: 8,
                  textAlign: 'left',
                  paddingLeft: 8,
                  paddingRight: 8,
                }}
                elevation={2}
              >
                <AccordionSummary>
                  <Typography variant="h6" style={{ paddingTop: 4 }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1">{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
      </div>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => navigate('/faq')}
      >
        See More FAQ
      </Button>
    </Container>
  );
};

export default HomeFAQ;
