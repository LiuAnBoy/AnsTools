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
    const isShareSupported = 'canShare' in navigator;
    if (isShareSupported) {
      const blob = await pdf(<PDFDoc data={data} />).toBlob();
      const pdfBlob = new Blob([blob], { type: blob.type });
      const file = new File([pdfBlob], `${data?.title}.pdf`, {
        type: pdfBlob.type,
      });
      if (navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            files: [file],
          });
          return;
        } catch (error) {
          console.error('Error sharing:', error);
        }
      }
    }
    const blob = await pdf(<PDFDoc data={data} />).toBlob();
    const pdfBlob = new Blob([blob], { type: 'application/pdf' });
    const url = URL.createObjectURL(pdfBlob);
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
          <Button type="primary" onClick={downloadPDF}>
            下載報價單
          </Button>
        </div>
      )}
    </div>
  );
};

export default PDFRender;

export interface PDFRenderProps {
  data: QuotationProps | null;
}
