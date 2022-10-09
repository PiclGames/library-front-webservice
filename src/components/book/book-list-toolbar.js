import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography,
  Modal, Select, InputLabel, MenuItem, Checkbox, ListItemText
} from '@mui/material';
import { Search as SearchIcon } from '../../icons/search';
import { useState } from 'react';
import { BookModalAdd } from './book_modal_add';



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
                      handleClose={handleClose}
        />
      </Box>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      fontSize="small"
                      color="action"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search a book"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>)
};
