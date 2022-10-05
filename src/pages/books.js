import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { products } from '../__mocks__/products';
import { BookListToolbar } from '../components/book/book-list-toolbar';
import { BookCard } from '../components/book/book-card';
import { DashboardLayout } from '../components/dashboard-layout';
import { useEffect } from 'react';

const Page = () => {
  useEffect(() => {
    console.log('recuperation des données');
  }, []);
  return <>
    <Head>
      <title>
        Books
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
        <BookListToolbar/>
        <Box sx={{ pt: 3 }}>

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
