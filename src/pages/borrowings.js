import Head from 'next/head';
import { Box, Container, } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { useEffect, useState } from 'react';
import { BorrowingListToolbar } from '../components/borrowing/borrowing-list-toolbar';
import { BorrowingListResults } from '../components/borrowing/borrowing-list-results';
import { fetchBorrowings } from '../services/library-api';

const Page = () => {
  const [borrowings, setBorrowings] = useState([]);

  useEffect(() => {
    fetchBorrowings().then(borrowings => {
      if(borrowings) setBorrowings(borrowings);
    }).catch(error => {
      console.log(error);
    });
  }, []);

  return <>
    <Head>
      <title>
        Borrowings
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <BorrowingListToolbar/>
        <Box sx={{ mt: 3 }}>
          <BorrowingListResults borrowings={borrowings}/>
        </Box>
      </Container>
    </Box>
  </>
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
