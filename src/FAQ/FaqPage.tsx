import * as React from 'react';
import Container from '../components/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import theme from '../theme';
import { faq } from './FaqMapping';
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  useMediaQuery,
} from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const FaqPage = () => {
  const [tab, setTab] = React.useState(0);
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container>
      <Typography
        variant={isTablet ? 'h4' : 'h3'}
        style={{ textAlign: 'center' }}
        color="primary"
      >
        Q+A
      </Typography>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box style={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={tab}
            onChange={(_, value) => setTab(value)}
            aria-label="faq tabs"
            centered
            variant="scrollable"
            scrollButtons
          >
            {['General', 'Engagement Party', 'Wedding'].map((label, index) => {
              return (
                <Tab
                  label={label}
                  style={{
                    fontSize: '1rem',
                    textTransform: 'capitalize',
                    color:
                      tab === index
                        ? theme.palette.primary.main
                        : theme.palette.primary.light,
                  }}
                  {...a11yProps(index)}
                />
              );
            })}
          </Tabs>
        </Box>
        <CustomTabPanel value={tab} index={0}>
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
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={1}>
          {faq
            .filter((f) => f.category === 'engagement')
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
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={2}>
          <Typography style={{ textAlign: 'center' }}>
            Coming soon! Wedding details are stil TBD.
          </Typography>
          {/* {faq
            .filter((f) => f.category === 'wedding')
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
            })} */}
        </CustomTabPanel>
        <Typography>
          Don't see your question? Check the "General FAQ" tab or reach out to
          us personally!
        </Typography>
      </Box>
    </Container>
  );
};

export default FaqPage;
