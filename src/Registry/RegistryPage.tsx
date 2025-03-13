import * as React from 'react';
import Container from '../components/Container';
import { Box, Dialog, Typography, useMediaQuery } from '@mui/material';
import theme from '../theme';
import { registryList } from './RegistryMapping';
import InfoCardSmall from '../components/InfoCardSmall';
import CloseIcon from '@mui/icons-material/Close';

const RegistryPage = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleClick = (link: string, category: string) => {
    if (category === 'fund') {
      setModalOpen(true);
    } else if (category === 'registry') {
      window.open(link, '_blank');
    }
  };

  return (
    <Container>
      <Typography
        variant={isTablet ? 'h4' : 'h3'}
        color="primary"
        style={{ paddingBottom: 16, textAlign: 'center' }}
      >
        Registry
      </Typography>
      <Typography variant="body1">
        Your presence at our wedding is the most meaningful gift we could ask
        for! However, if you’d like to give a little something extra, we’ve set
        up a honeymoon fund to help us create unforgettable memories on our
        dream getaway. While we also have other gifts listed, your contribution
        to our honeymoon would truly mean the world to us as we start this
        exciting journey together. Thank you for your love and support!
      </Typography>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          paddingTop: 24,
        }}
      >
        {registryList.map((listItem, index) => {
          return (
            <InfoCardSmall
              key={index}
              title={listItem.title}
              text={listItem.text}
              image={listItem.image}
              onClick={() => handleClick(listItem.link, listItem.category)}
            />
          );
        })}
      </div>
      <PaymentModal open={modalOpen} setModalOpen={setModalOpen} />
    </Container>
  );
};

type PaymentModalProps = {
  open: boolean;
  setModalOpen: (_: boolean) => void;
};

const PaymentModal = ({ open, setModalOpen }: PaymentModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={() => setModalOpen(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        style={{
          padding: 24,
          background: theme.palette.secondary.main,
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 300,
          height: 410,
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
        <div style={{ padding: 8 }}>
          {
            // TEST MODE
            // @ts-expect-error
            <stripe-buy-button
              buy-button-id="buy_btn_1R20LcP0dVBsrXShKCzvjHEU"
              publishable-key="pk_test_51R1xIXP0dVBsrXShZ1Bo1X4OWbHmU4LX7y5fqskM4rSGrK91cpIKTNsEkHk9kGtphUuVr2EaIzN9y3IXUWrUVBJW00MBn9vipN"
            />
            // PRODUCTION
            // @ts-expect-erro
            // <stripe-buy-button
            //   buy-button-id="buy_btn_1R1zyHP0dVBsrXShhyqlfPJv"
            //   publishable-key="pk_live_51R1xIXP0dVBsrXShIa53eULrjcgxp6enUmkzRb8SpIRtWU2MGoXMvsvhTpA37gW97CgJRs6ZqNknJrOVGQI4dg1Y00zRyGJlHk"
            // />
          }
        </div>
        <Typography variant="caption" style={{ textAlign: 'center' }}>
          Transactions will be completed in a separate tab.
        </Typography>
      </Box>
    </Dialog>
  );
};

export default RegistryPage;
