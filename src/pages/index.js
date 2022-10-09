import Head from 'next/head';
import { DashboardLayout } from '../components/dashboard-layout';
import { Card, CardContent, Typography } from '@mui/material';

const Page = () => (
  <>
    <Head>
      <title>
        Dashboard
      </title>
    </Head>
    <Card
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <CardContent maxWidth={false}>
        <Typography
          sx={{
            borderRadius: 1,
            fontWeight: 'fontWeightBold',
            textAlign: 'left',
            fontSize: '1.5rem',
          }}
        >
          Library App
        </Typography>
        <Typography
          sx={{
            borderRadius: 1,
            fontWeight: 'fontWeightBold',
            textAlign: 'left',
            fontSize: '1rem',
          }}
        >
          Projet de Antoine GUESPIN, Victor BRIONNE, Lucas THOMASSIN
        </Typography>
      </CardContent>
    </Card>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
