import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography
} from '@mui/material';
import { fetchAuthors, fetchPublishers } from '../../services/library-api';
import { useEffect, useState } from 'react';

export const BookModalAdd = (props) => {
  const { open, onClose } = props;

  const [ book, setBook ] = useState({ name: '', author: '', publisher: '' });
  const [ authors, setAuthors ] = useState({});
  const [ publishers, setPublishers ] = useState({});

  const updateBook = (fieldName, newValue) => {
    setBook({ ...book, [fieldName]: newValue });
  }

  useEffect(() => {
    console.log('useEffect recuperation des données');
    fetchAuthors().then(authors => {
      setAuthors(authors);
      console.log(authors);
    });
    fetchPublishers().then(publishers => {
      setPublishers(publishers)
      console.log(publishers);
    });
    console.log('useEffect fin');
  }, []);

  useEffect(() => {
    console.log('book', book);
  }, [book]);

  return <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #374151',
      borderRadius: '4px',
      boxShadow: 24,
      p: 1,
    }}
    >
      <Typography id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  sx={{
                    p: 1,
                    fontSize: '1.5rem',
                  }}
      >
        Adding a book
      </Typography>

      <Typography id="modal-modal-description"
                  sx={{ mt: 2 }}
      >
        <InputLabel htmlFor="name-book"
                    sx={{ mt: 4 }}
        >Name</InputLabel>
        <TextField
          id={"name-book"}
          fullWidth
          onChange={(event) => updateBook('name', event.target.value)}
        >
        </TextField>

        <InputLabel htmlFor="author-book"
                    sx={{ mt: 4 }}
        >Author</InputLabel>
        <Select
          id={"author-book"}
          fullWidth
          onChange={(event) => updateBook('author', event.target.value)}
        >
          {authors && Object.entries(authors).map((author ,index) => {
            return <MenuItem key={index}
                             value={index}
            >
              {author.firstName} {author.lastName}
            </MenuItem>
          })}
        </Select>

        <InputLabel htmlFor="author-book"
                    sx={{ mt: 4 }}
        >Publisher</InputLabel>
        <Select
          id={"author-book"}
          fullWidth
          onChange={(event) => updateBook('publisher', event.target.value)}
        >
          {publishers && Object.entries(publishers).map((publisher ,index) => {
            return <MenuItem key={index}
                             value={index}
            >
              {publisher.name}
            </MenuItem>
          })}
        </Select>
      </Typography>
      <Box sx={{
        mt: 6,
        display: 'flex',
        flexDirection: 'row-reverse',
        gap: 2,
      }}>
        <Button
          color="primary"
          variant="contained"
        >
          Add
        </Button>
        <Button
          color="warning"
          variant="contained"
          onClick={onClose}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  </Modal>
}
