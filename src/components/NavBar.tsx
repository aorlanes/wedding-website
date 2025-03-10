import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { MenuRounded } from '@mui/icons-material';
import theme from '../theme';
import * as React from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Q+A', href: '/faq' },
  { label: 'Registry', href: '/registry' },
  { label: 'RSVP', href: '/rsvp' },
];

const NavBar = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navList = () => {
    return navItems.map((item) => (
      <ListItem
        key={item.label}
        disablePadding
        style={{ width: isTablet ? 'auto' : '100%' }}
      >
        <ListItemButton
          sx={{
            textAlign: isTablet ? 'left' : 'center',
            justifyContent: isTablet ? 'left' : 'center',
            textWrap: 'nowrap',
          }}
          onClick={() => navigate(item.href)}
        >
          <Typography
            style={{
              color: theme.palette.text.primary,
            }}
            variant="button"
          >
            {item.label}
          </Typography>
        </ListItemButton>
      </ListItem>
    ));
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar
          style={{
            position: 'relative',
            background: theme.palette.background.default,
          }}
        >
          {isTablet && (
            <MenuRounded
              htmlColor={theme.palette.primary.main}
              onClick={() => setIsOpen(!isOpen)}
              fontSize={'large'}
              style={{ position: 'absolute', zIndex: 2 }}
            />
          )}
          <div
            style={{
              display: 'flex',
              justifyContent: isTablet ? 'center' : 'flex-start',
              width: '100%',
            }}
          >
            <Typography
              variant="h3"
              style={{
                color: theme.palette.text.primary,
                cursor: 'pointer',
                marginTop: '20px',
              }}
              onClick={() => navigate('/')}
            >
              A&E
            </Typography>
          </div>
          <Divider />
          {!isTablet ? (
            <List
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              {navList()}
            </List>
          ) : (
            <Drawer
              anchor="top"
              open={isOpen}
              onClose={() => setIsOpen(false)}
              PaperProps={{ square: false }}
            >
              <Box
                sx={{ background: theme.palette.background.default }}
                role="presentation"
                onClick={() => setIsOpen(false)}
                onKeyDown={() => setIsOpen(false)}
              >
                <div style={{ height: 76 }} />
                <Divider />
                <List>{navList()}</List>
              </Box>
            </Drawer>
          )}
        </Toolbar>
      </AppBar>
      <div style={{ height: 76 }} />
    </>
  );
};

export default NavBar;
