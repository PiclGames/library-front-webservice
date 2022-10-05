import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { useEffect } from 'react';
import { AccountListResults } from '../components/account/account-list-results';
import { customers } from '../__mocks__/customers';
import { BorrowingListToolbar } from '../components/borrowing/borrowing-list-toolbar';
import { BorrowingListResults } from '../components/borrowing/borrowing-list-results';

const Page = () => {
  useEffect(() => {
    console.log('recuperation des données');
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
          <BorrowingListResults customers={customers}/>
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
