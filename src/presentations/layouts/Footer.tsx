'use client';

import { Layout } from 'antd';

export default function Footer() {
  const { Footer } = Layout;

  const Year = new Date().getFullYear();

  return (
    <Footer style={{ textAlign: 'center' }}>
      COPYRIGHT &copy; {Year} <em>CLA</em> ALL RIGHTS RESERVED.
    </Footer>
  );
}
