import Head from 'next/head';
import { Box, Container, } from '@mui/material';
import { BookListToolbar } from '../components/book/book-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchBooks } from '../services/library-api';
import { BookListResults } from '../components/book/book-list-results';

const Page = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks().then(books => {
      setBooks(books);
    }).catch(error => {
      console.log(error);
    });
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
          <BookListResults books={books}/>
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
