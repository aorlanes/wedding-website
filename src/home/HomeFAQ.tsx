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

const HomeFAQ = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const faq = [
    {
      question: 'Are kids invited?',
      answer: (
        <>
          While we adore your little ones, all of our events will strictly be{' '}
          <span style={{ fontWeight: 'bold' }}>adults-only</span>, with the
          exception of children of immediate family members.
        </>
      ),
    },
    {
      question: 'Am I allowed to bring a plus one?',
      answer: (
        <>
          Due to limited capacity, only guests formally invited on your
          invitation will be allowed to attend. If you received a plus one they
          will appear when you RSVP. Those not on the guest list will be
          prohibited from attending and will be asked to leave.
        </>
      ),
    },
    // {
    //   question: 'Is there a dress code?',
    //   answer: (
    //     <>
    //       For our Engagement Party celebration, the dress code is dressy casual
    //       or smart casual. Please dress appropriately for the weather and
    //       occasion, and our only request is to avoid white!
    //     </>
    //   ),
    // },
    // {
    //   question: 'When should I RSVP by?',
    //   answer: (
    //     <>
    //       For our Engagement Party celebration, if we do not receive your RSVP
    //       by <span style={{ fontWeight: 'bold' }}>June 11, 2025</span> you will
    //       automatically be marked as "Not Attending". If your situation is
    //       complicated, please feel free to reach out to us personally and we can
    //       try our best to find a reasonable accommodation.
    //       <br />
    //       <br />
    //       For our Wedding celebration, the final RSVP date is still TBD.
    //       <br />
    //       <br />
    //       While we would love to celebrate with you, it is important that we
    //       provide the venue and vendors with a final guest count. Thank you for
    //       understanding!
    //     </>
    //   ),
    // },
    {
      question: 'How will I know which event(s) I am invited to?',
      answer: (
        <>
          Invitations to our Engagement Party celebration will be sent by
          directing you here to this website! This is not an open event so only
          guests on the guest list will be allowed to RSVP.
          <br />
          <br />
          We are currently still in the planning phase for our wedding and have
          not yet established the details for our ceremony. But due to limited
          space and our desire for an intimate gathering, we plan to only send
          out a few invitations for our wedding. Invitations will be sent via
          mail, then we will personally follow up to ensure they got delivered.
          Those who receive an invitation will be able to RSVP on our website.
          <br />
          <br />
          We hope you understand and we appreciate your support and love for our
          special day.
        </>
      ),
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
        {faq.map((faq, index) => {
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
