'use client';

import { PDFDownloadLink } from '@react-pdf/renderer';
import dynamic from 'next/dynamic';
import { FC } from 'react';

import { QuotationProps } from '@/app/function/quotation-generator/page';
import styles from '@/styles/components/PDFRender.module.scss';

import Loading from '../../Loading';
import PDFDoc from './Doc';

const PDFRender: FC<PDFRenderProps> = ({ data }) => {
  const PDFViewer = dynamic(
    () => import('@react-pdf/renderer').then((mod) => mod.PDFViewer),
    {
      ssr: false,
      loading: () => <Loading />,
    },
  );

  return (
    <div className={styles.pdf_render_container}>
      <PDFViewer className={styles.pdf_viewer}>
        <PDFDoc data={data} />
      </PDFViewer>
      {data && (
        <div className={styles.pdf_download_button_container}>
          <PDFDownloadLink
            document={<PDFDoc data={data} />}
            fileName={`${data?.title}.pdf`}
            className={styles.pdf_download_button}
          >
            {({ blob, url, loading, error }) =>
              loading ? '產生中...' : '下載報價單'
            }
          </PDFDownloadLink>
        </div>
      )}
    </div>
  );
};

export default PDFRender;

export interface PDFRenderProps {
  data: QuotationProps | null;
}
