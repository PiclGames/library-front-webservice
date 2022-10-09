import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { AccountListResults } from '../components/account/account-list-results';
import { AccountListToolbar } from '../components/account/account-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { useEffect, useState } from 'react';
import { fetchAccounts } from '../services/auth-api';

const Page = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetchAccounts().then(accounts => {
      setAccounts(accounts);
    }).catch(error => {
      console.log(error);
    });
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
          <AccountListResults accounts={accounts}/>
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
