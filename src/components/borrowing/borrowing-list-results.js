import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';

export const BorrowingListResults = ({ borrowings, ...rest }) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);


  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Book
                </TableCell>
                <TableCell>
                  Date
                </TableCell>
                <TableCell>
                  User
                </TableCell>
                <TableCell>
                  Borrowing creator
                </TableCell>
                <TableCell>
                  Duration
                </TableCell>
                <TableCell>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {borrowings && Object.entries(borrowings).map((borrowing) => (
                <TableRow
                  hover
                  key={borrowing.id}
                >
                  <TableCell>
                    {borrowing.book}
                  </TableCell>
                  <TableCell>
                    {borrowing.user}
                  </TableCell>
                  <TableCell>
                    {borrowing.borrowingCreator}
                  </TableCell>
                  <TableCell>
                    {borrowing.date}
                  </TableCell>
                  <TableCell>
                    {borrowing.duration}
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
        count={borrowings ? borrowings.length : 0}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

BorrowingListResults.propTypes = {
  borrowings: PropTypes.array.isRequired
};
