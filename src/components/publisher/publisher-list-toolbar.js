import {
  Box,
  Button,
  Typography
} from '@mui/material';
import { PublisherModalAdd } from './publisher-modal-add';
import { useState } from 'react';

export const PublisherListToolbar = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return <Box {...props}>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        m: -1
      }}
    >
      <Typography
        sx={{ m: 1 }}
        variant="h4"
      >
        Authors
      </Typography>
      <Box sx={{ m: 1 }}>
        <Button
          color="primary"
          variant="contained"
          onClick={handleOpen}
        >
          Add a publisher
        </Button>
        <PublisherModalAdd open={open}
                           onClose={handleClose}/>
      </Box>
    </Box>
  </Box>
};
