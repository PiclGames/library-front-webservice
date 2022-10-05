import Head from 'next/head';
import { DashboardLayout } from '../components/dashboard-layout';

const Page = () => (
  <>
    <Head>
      <title>
        Dashboard
      </title>
    </Head>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
