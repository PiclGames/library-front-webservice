import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { BookModalAdd } from './book-modal-add';



export const BookListToolbar = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
  <Box {...props}>
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
        Books
      </Typography>
      <Box sx={{ m: 1 }}>
        <Button
          color="primary"
          variant="contained"
          onClick={handleOpen}
        >
          Add a book
        </Button>
        <BookModalAdd open={open}
                      onClose={handleClose}
        />
      </Box>
    </Box>
  </Box>)
};
