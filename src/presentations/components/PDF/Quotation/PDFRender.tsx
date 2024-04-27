'use client';

import { PDFViewer } from '@react-pdf/renderer';
import { FC } from 'react';

import { QuotationProps } from '@/app/function/quotation-generator/page';

import PDFDoc from './Doc';

const PDFRender: FC<PDFRenderProps> = ({ data }) => {
  return (
    <div
      style={{ width: 'calc(100vw - 375px)', height: 'calc(100vh - 140px)' }}
    >
      <PDFViewer style={{ width: 'calc(100vw - 400px)', height: '100%' }}>
        <PDFDoc data={data} />
      </PDFViewer>
    </div>
  );
};

export default PDFRender;

export interface PDFRenderProps {
  data: QuotationProps | null;
}
