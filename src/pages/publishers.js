import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { useEffect, useState } from 'react';
import { PublisherListToolbar } from '../components/publisher/publisher-list-toolbar';
import { PublisherListResults } from '../components/publisher/publisher-list-results';
import { fetchPublishers } from '../services/library-api';

const Page = () => {
  const [publishers, setPublishers] = useState([]);

  useEffect(() => {
    fetchPublishers().then(publishers => {
      setPublishers(publishers);
    }).catch(error => {
      console.log(error);
    });
  }, []);

  return <>
    <Head>
      <title>
        Publishers
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
        <PublisherListToolbar/>
        <Box sx={{ mt: 3 }}>
          <PublisherListResults publishers={publishers}/>
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
