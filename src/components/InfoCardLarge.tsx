import '../App.css';
import theme from '../theme';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import * as React from 'react';

type Props = {
  alignment: 'LEFT' | 'RIGHT';
  title: string;
  text: string;
  itemList?: string[];
  image: string;
};

const InfoCardLarge = ({ alignment, title, text, itemList, image }: Props) => {
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Paper
      elevation={3}
      style={{
        backgroundColor: theme.palette.text.primary,
        display: 'flex',
        flexDirection: isTablet
          ? 'column-reverse'
          : alignment === 'RIGHT'
          ? 'row'
          : 'row-reverse',
        marginBottom: 32,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: isTablet ? 'auto' : '50%',
          textAlign: isTablet
            ? 'center'
            : alignment === 'RIGHT'
            ? 'start'
            : 'end',
          padding: 16,
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography>{text}</Typography>
        <ul>
          {itemList?.map((item, index) => {
            return (
              <li key={index} style={{ textAlign: 'start' }}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: isTablet ? 'auto' : '50%',
          height: isTablet ? '256px' : 'auto',
        }}
      />
    </Paper>
  );
};

export default InfoCardLarge;
