import * as React from 'react';
import * as _ from 'lodash';
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Dialog,
  Typography,
  useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import theme from '../theme';
import Container from '../components/Container';
import Carousel from '../components/Carousel';

const HomeWeddingPartyCarousel = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.down('lg'));
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState<SlideCardInfo>();

  const reviews = [
    {
      name: 'John D.',
      title: 'Best Man',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: '',
    },
    {
      name: 'Jane D.',
      title: 'Maid of Honor',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: '',
    },
    {
      name: 'John D.',
      title: 'Groomsman',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: '',
    },
    {
      name: 'Jane D.',
      title: 'Bridesmaid',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: '',
    },
    {
      name: 'John D.',
      title: 'Groomsman',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: '',
    },
    {
      name: 'Jane D.',
      title: 'Bridesmaid',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: '',
    },
  ];

  const handleOpen = (info: SlideCardInfo) => {
    setModalInfo(info);
    setModalOpen(true);
  };

  const slideCards = reviews.map((review, index) => {
    return <SlideCard key={index} info={review} onClick={handleOpen} />;
  });

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        width: '100%',
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      {modalOpen && (
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
            <Avatar
              style={{
                width: 256,
                height: 256,
                background: theme.palette.primary.light,
                color: theme.palette.secondary.light,
              }}
              src={modalInfo.image}
            />
            <Typography variant="subtitle1">{modalInfo.name}</Typography>
            <Typography variant="h5" style={{ fontStyle: 'italic' }}>
              {modalInfo.title}
            </Typography>
            <Typography variant="body2">{modalInfo.text}</Typography>
          </div>
        </Dialog>
      )}
      <Typography
        variant={isTablet ? 'h4' : 'h3'}
        color="primary"
        style={{ paddingBottom: 24 }}
      >
        Wedding Party
      </Typography>
      <Carousel
        items={slideCards}
        displayCount={isTablet ? 1 : isDesktop ? 2 : 3}
        slideByCount={isTablet ? 1 : isDesktop ? 2 : 3}
      />
    </Container>
  );
};

type SlideCardInfo = {
  image?: string;
  name: string;
  title: string;
  text: string;
};

type SlideCardProps = {
  info: SlideCardInfo;
  onClick: (props: SlideCardInfo) => void;
};

const SlideCard = ({ info, onClick }: SlideCardProps) => {
  return (
    <Card
      style={{
        minWidth: 300,
        maxWidth: 300,
        margin: 9,
        background: theme.palette.secondary.light,
      }}
      onClick={() => onClick(info)}
    >
      <CardActionArea>
        <CardContent
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            style={{
              width: 128,
              height: 128,
              background: theme.palette.primary.light,
              color: theme.palette.secondary.light,
            }}
            src={info.image}
          />
          <Typography variant="subtitle1">{info.name}</Typography>
          <Typography
            variant="subtitle2"
            style={{ fontFamily: 'La Belle Aurore, cursive' }}
          >
            {info.title}
          </Typography>
          <Typography
            variant="body2"
            style={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              maxHeight: 80,
              display: '-webkit-box',
              wordWrap: 'break-word',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
            }}
          >
            {info.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HomeWeddingPartyCarousel;
