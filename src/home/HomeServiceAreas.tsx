import { Grid, List, ListItem, Typography, useMediaQuery } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import theme from '../theme';
import Container from '../components/Container';
import * as React from 'react';

const HomeServiceAreas = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const TOKEN =
    'pk.eyJ1IjoiYW9ybGFuZXMiLCJhIjoiY2w5aXRzMDM2MHI5YzQxcDJlem5lcHl2YyJ9.JyZRBBNBDqRQkivOmFAcnA';

  const areas = [
    'Beverly Hills',
    'Beverlywood',
    'Beverly Grove',
    'Brentwood',
    'Century City',
    'Cheviot Hills',
    'Culver City',
    'Del Rey',
    'Mar Vista',
    'Marina Del Rey',
    'Ladera Heights',
    'Pico-Robertson',
    'Playa del Rey',
    'Playa Vista',
    'Rancho Park',
    'Santa Monica',
    'Sawtelle',
    'Venice',
    'West Hollywood',
    'Westchester',
    'Westwood',
  ];

  return (
    <Container>
      <Typography
        variant={isTablet ? 'h4' : 'h3'}
        color="primary"
        style={{ paddingBottom: 16, textAlign: 'center' }}
      >
        Service Areas
      </Typography>
      <Typography
        variant={isTablet ? 'h5' : 'h4'}
        color={theme.palette.text.primary}
        style={{ textAlign: 'center', paddingBottom: 32 }}
      >
        Lorem ipsum dolor sit amet.
      </Typography>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            borderRadius: 5,
            display: 'flex',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <img
            src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/path+82c284+82c284(yktnEtzjrU%7Dw%40k_Aw%60%40uIm%7B%40glAqZkwCyPwbBmc%40%7BrBksDisJ%3Fy%7BD%60nDcAta%40%7CL~NaNb~DbjAf~EfQrAflAx%7DLiCv%40jtJazGheDyPpVge%40xJyaFxiEaoBnkC)/-118.3577,34.0014,9.25,0/325x256${
              isTablet ? '' : '@2x'
            }?access_token=${TOKEN}&attribution=false`}
            alt="Service Area Map"
          />
        </div>
        <div
          style={{
            paddingTop: 24,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <List
            style={{
              width: isMobile ? 300 : '100%',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
            dense
          >
            <Grid container>
              {areas.map((area, index) => {
                return (
                  <Grid key={index} item xs={6} sm={4}>
                    <ListItem
                      disableGutters
                      style={{ justifyContent: 'center' }}
                    >
                      <PlaceIcon
                        color="secondary"
                        style={{
                          paddingRight: 4,
                        }}
                      />
                      <Typography variant="body2">{area}</Typography>
                    </ListItem>
                  </Grid>
                );
              })}
            </Grid>
          </List>
        </div>
      </div>
    </Container>
  );
};

export default HomeServiceAreas;
