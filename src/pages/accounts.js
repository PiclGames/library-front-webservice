import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { AccountListResults } from '../components/account/account-list-results';
import { AccountListToolbar } from '../components/account/account-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';
import { useEffect } from 'react';

const Page = () => {
  useEffect(() => {
      console.log('recuperation des données');
  }, []);

  return (<>
    <Head>
      <title>
        Accounts
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
        <AccountListToolbar/>
        <Box sx={{ mt: 3 }}>
          <AccountListResults customers={customers}/>
        </Box>
      </Container>
    </Box>
  </>)
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
