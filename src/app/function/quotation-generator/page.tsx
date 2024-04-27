'use client';

import { Form, FormProps, Space } from 'antd';
import { useState } from 'react';

import PDFForm from '@/presentations/components/PDF/Quotation/PDFForm';
import PDFRender from '@/presentations/components/PDF/Quotation/PDFRender';

const QuotationGeneratorPage = () => {
  const [form] = Form.useForm();

  const [data, setData] = useState<QuotationProps | null>(null);

  const onFinish: FormProps<QuotationProps>['onFinish'] = (values) => {
    setData(values);
    const storage = localStorage.getItem('ansTools');
    if (storage) {
      const storageData = JSON.parse(storage);
      storageData.quotation.name = values.name;
      storageData.quotation.phone = values.phone;
      storageData.quotation.email = values.email;
      localStorage.setItem('ansTools', JSON.stringify(storageData));
    } else {
      const quotation = {
        name: values.name,
        phone: values.phone,
        email: values.email,
      };
      localStorage.setItem('ansTools', JSON.stringify({ quotation }));
    }
  };

  return (
    <div>
      <Space style={{ height: 'calc(100vh - 168px)' }}>
        {/* <PDFForm form={form} onFinish={onFinish} /> */}
        {/* <PDFRender data={data} /> */}
      </Space>
    </div>
  );
};

export default QuotationGeneratorPage;

export interface QuotationProps {
  file_name: string;
  title: string;
  customer: string;
  contact_name: string;
  contact_email: string;
  quote_date: string;
  quote_name: string;
  case_name: string;
  items: ItemProps[];
  phone: string;
  name: string;
  email: string;
}

export interface ItemProps {
  name: string;
  description: string;
  quantity: string;
  unit_price: string;
}
