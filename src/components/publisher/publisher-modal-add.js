import {
  Box,
  Button,
  InputLabel,
  Modal,
  TextField,
  Typography
} from '@mui/material';
import { useEffect, useState } from 'react';

export const PublisherModalAdd = (props) => {
  const { open, onClose } = props;

  const [ publisher, setPublisher ] = useState({ name: ''});

  const updateBook = (fieldName, newValue) => {
    setPublisher({ ...publisher, [fieldName]: newValue });
  }

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
        Adding an author
      </Typography>

      <Typography id="modal-modal-description"
                  sx={{ mt: 2 }}
      >
        <InputLabel htmlFor="name-book"
                    sx={{ mt: 4 }}
        >First Name</InputLabel>
        <TextField
          id={"name-book"}
          fullWidth
          onChange={(event) => updateBook('firstName', event.target.value)}
        >
        </TextField>

        <InputLabel htmlFor="author-book"
                    sx={{ mt: 4 }}
        >Last Name</InputLabel>
        <TextField
          id={"name-book"}
          fullWidth
          onChange={(event) => updateBook('lastName', event.target.value)}
        >
        </TextField>
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
