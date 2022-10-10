import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { useEffect, useState } from 'react';
import { PublisherListToolbar } from '../components/publisher/publisher-list-toolbar';
import { PublisherListResults } from '../components/publisher/publisher-list-results';
import { fetchAuthors } from '../services/library-api';
import { AuthorListResults } from '../components/author/author-list-results';
import { AuthorListToolbar } from '../components/author/author-list-toolbar';

const Page = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchAuthors().then(authors => {
      if(authors) setAuthors(authors);
    }).catch(error => {
      console.log(error);
    });
  }, []);

  return <>
    <Head>
      <title>
        Authors
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
        <AuthorListToolbar/>
        <Box sx={{ mt: 3 }}>
          <AuthorListResults authors={authors}/>
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
