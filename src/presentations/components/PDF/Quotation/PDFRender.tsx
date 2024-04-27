'use client';

import { PDFViewer } from '@react-pdf/renderer';
import { FC } from 'react';

import { QuotationProps } from '@/app/function/quotation-generator/page';
import styles from '@/styles/components/PDFRender.module.scss';

import PDFDoc from './Doc';

const PDFRender: FC<PDFRenderProps> = ({ data }) => {
  if (!data) return null;

  return (
    <div className={styles.pdf_render_container}>
      <PDFViewer className={styles.pdf_viewer}>
        <PDFDoc data={data} />
      </PDFViewer>
    </div>
  );
};

export default PDFRender;

export interface PDFRenderProps {
  data: QuotationProps | null;
}
