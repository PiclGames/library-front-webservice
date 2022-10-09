import { useState } from 'react';
import {
  Box, Card,
  Grid,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead, TablePagination,
  TableRow
} from '@mui/material';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const BookListResults = ({ books, ...rest }) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return <Card {...rest}>
    <PerfectScrollbar>
      <Box sx={{ minWidth: 1050 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Name
              </TableCell>
              <TableCell>
                Author
              </TableCell>
              <TableCell>
                Publisher
              </TableCell>
              <TableCell>
                Release Date
              </TableCell>
              <TableCell>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books && Object.entries(books).map((book) => (
              <TableRow
                hover
                key={book.id}
              >
                <TableCell>
                  {book.name}
                </TableCell>
                <TableCell>
                  {book.author}
                </TableCell>
                <TableCell>
                  {book.publisher}
                </TableCell>
                <TableCell>
                  {book.releaseDate}
                </TableCell>
                <TableCell>
                  {/* todo modification and delete buttons*/}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <TablePagination
      component="div"
      count={books ? books.length : 0}
      onPageChange={handlePageChange}
      onRowsPerPageChange={handleLimitChange}
      page={page}
      rowsPerPage={limit}
      rowsPerPageOptions={[5, 10, 25]}
    />
  </Card>
};

BookListResults.propTypes = {
  books: PropTypes.array.isRequired
};
