import {
  Box,
  Button,
  Typography
} from '@mui/material';

export const BorrowingListToolbar = (props) => (
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
        Borrowings
      </Typography>
      <Box sx={{ m: 1 }}>
        <Button
          color="primary"
          variant="contained"
        >
          Add a borrowing
        </Button>
      </Box>
    </Box>
  </Box>
);
