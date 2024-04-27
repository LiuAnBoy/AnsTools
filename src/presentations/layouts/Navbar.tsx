'use client';

import { Layout } from 'antd';

import Logo from '../components/Logo';

const Navbar = () => {
  const { Header } = Layout;

  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <Logo />
    </Header>
  );
};

export default Navbar;
