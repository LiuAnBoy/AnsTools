import './globals.css';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import AntdLayout from '@/presentations/layouts';
import theme from '@/styles/theme';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `An's Tools`,
  description: 'Little tools',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AntdRegistry>
          <ConfigProvider theme={theme}>
            <AntdLayout>{children}</AntdLayout>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
