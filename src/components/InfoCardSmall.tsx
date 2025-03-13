import * as React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from '@mui/material';
import theme from '../theme';

type ServiceCardProps = {
  title: string;
  text: string;
  image: string;
  onClick?: (_: any) => void;
};

const InfoCardSmall = ({ title, text, image, onClick }: ServiceCardProps) => {
  return (
    <Card
      style={{
        width: 250,
        margin: 8,
        background: theme.palette.secondary.light,
      }}
    >
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="img"
          height={175}
          image={image}
          alt={title}
          style={{ backgroundPosition: 'center bottom' }}
        />
        <CardContent style={{ textAlign: 'center' }}>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{text}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default InfoCardSmall;
