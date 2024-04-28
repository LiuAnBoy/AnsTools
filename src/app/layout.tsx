import './globals.css';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { GoogleAnalytics } from '@next/third-parties/google';
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
  title: "An's Tools",
  description: 'Little tools',
  icons:
    'https://res.cloudinary.com/cla/image/upload/v1646815386/Portfolio/Icon/favicon_hcp9q9_nfsipe.png',
  openGraph: {
    title: {
      default: "An's Tools",
      template: "An's Tools",
    },
    url: 'https://app.luan.com.tw',
    siteName: "An's Tools",
    description: 'Little tools',
    tags: [
      'Front-End Developer',
      'UI/UX Designer',
      'React',
      'Next.js',
      'Front-End',
      'Tools',
    ],
    images: [
      {
        url: 'https://res.cloudinary.com/cla/image/upload/v1646815386/Portfolio/Icon/favicon_hcp9q9_nfsipe.png',
        alt: 'hero',
      },
    ],
  },
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
        <GoogleAnalytics
          gaId={process.env.NEXT_GOOGLE_ANALYTICS_ID as string}
        />
      </body>
    </html>
  );
}
