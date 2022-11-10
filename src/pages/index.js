import React from 'react';
import { Layout } from 'components';
import { Seo } from '../components/seo';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to the Gatsby &amp; Shopify starter.</p>
  </Layout>
);

export default IndexPage;