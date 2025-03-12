import * as React from 'react';
import Container from '../components/Container';
import {
  Box,
  Dialog,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
  CardMedia,
  Card,
} from '@mui/material';
import { photos } from './PhotoMapping';
import theme from '../theme';
import CloseIcon from '@mui/icons-material/Close';

const GalleryPage = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalImg, setModalImg] = React.useState<string>();

  const handleOpen = (img: string) => {
    setModalImg(img);
    setModalOpen(true);
  };

  return (
    <Container>
      <Typography
        variant={isTablet ? 'h4' : 'h3'}
        color="primary"
        style={{ textAlign: 'center' }}
      >
        Gallery
      </Typography>
      <Box
        style={{
          paddingLeft: isMobile ? 0 : 64,
          paddingRight: isMobile ? 0 : 64,
        }}
      >
        <ImageList
          style={{ width: '100%', height: 'auto' }}
          cols={3}
          gap={8}
          variant="masonry"
        >
          {photos.map((img) => (
            <ImageListItem
              key={img}
              sx={{
                borderRadius: 5,
                cursor: 'pointer',
              }}
              onClick={() => handleOpen(img)}
            >
              <Box
                sx={{
                  position: 'absolute',
                  '&:hover': {
                    transition: 'background 0.2s ease-in',
                    background: theme.palette.primary.dark,
                    opacity: 0.1,
                  },
                  zIndex: 2,
                  width: '100%',
                  height: '100%',
                }}
              />
              <img
                loading="lazy"
                src={img}
                alt={img}
                style={{ borderRadius: 5 }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Typography
        variant="body1"
        color="primary"
        style={{ textAlign: 'center', paddingTop: 16 }}
      >
        Proposal photos taken by our talented and dear friend Josh Olivas.
      </Typography>
      {modalOpen && (
        <ImageModal
          img={modalImg}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      )}
    </Container>
  );
};

type ImageModalProps = {
  img: string;
  modalOpen: boolean;
  setModalOpen: (_: boolean) => void;
};

const ImageModal = ({ img, modalOpen, setModalOpen }: ImageModalProps) => {
  return (
    <Dialog
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card style={{ maxWidth: '100%' }}>
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
        <CardMedia component="img" image={img} />
      </Card>
    </Dialog>
  );
};

export default GalleryPage;
