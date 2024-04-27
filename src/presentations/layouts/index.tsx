import { Layout } from 'antd';
import React from 'react';

import Content from './Content';
import Footer from './Footer';
import Navbar from './Navbar';

const AntdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
};

export default AntdLayout;
