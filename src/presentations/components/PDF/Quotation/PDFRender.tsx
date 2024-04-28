'use client';

import { pdf } from '@react-pdf/renderer';
import { Button } from 'antd';
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

  const downloadPDF = async () => {
    const blob = await pdf(<PDFDoc data={data} />).toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${data?.title}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className={styles.pdf_render_container}>
      <PDFViewer className={styles.pdf_viewer}>
        <PDFDoc data={data} />
      </PDFViewer>
      {data && (
        <div className={styles.pdf_download_button_container}>
          <Button onClick={downloadPDF}>下載報價單</Button>
        </div>
      )}
    </div>
  );
};

export default PDFRender;

export interface PDFRenderProps {
  data: QuotationProps | null;
}
