
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
import { Lock as LockIcon } from '../icons/lock';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Users as UsersIcon } from '../icons/users';
import { NavItem } from './nav-item';
import { AddShoppingCart } from '@mui/icons-material';

const items = [
  {
    href: '/',
    icon: (<ChartBarIcon fontSize="small" />),
    title: 'Dashboard'
  },
  {
    href: '/accounts',
    icon: (<UsersIcon fontSize="small" />),
    title: 'Accounts'
  },
  {
    href: '/books',
    icon: (<MenuBookIcon  fontSize="small" />),
    title: 'Books'
  },
  {
    href: '/borrowings',
    icon: (<AddShoppingCart fontSize="small"/>), // todo changer icon
    title: 'Borrowings'
  },
  {
    href: '/publishers',
    icon: (<LockIcon fontSize="small" />), // todo changer icon
    title: 'Publishers'
  },
  {
    href: '/authors',
    icon: (<LockIcon fontSize="small" />), // todo changer icon
    title: 'Authors'
  },
  {
    href: '/login',
    icon: (<LockIcon fontSize="small" />),
    title: 'Login'
  },
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <NextLink
              href="/"
              passHref
            >
              <Typography
                sx={{
                  borderRadius: 1,
                  color: 'neutral.300',
                  fontWeight: 'fontWeightBold',
                  textAlign: 'left',
                  fontSize: '1.5rem',
                }}
              >
                Library App
              </Typography>
            </NextLink>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 3
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
