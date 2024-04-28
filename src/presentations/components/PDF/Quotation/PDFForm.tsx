'use client';

import {
  InfoCircleOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Form,
  FormInstance,
  Input,
  Row,
  Select,
  Space,
} from 'antd';
import dayjs from 'dayjs';
import { FC, useEffect } from 'react';

import { QuotationProps } from '@/app/function/quotation-generator/page';

import styles from '../../../../styles/components/PDFForm.module.scss';
import TextEditor from '../../TextEditor';

const PDFForm: FC<PDFFormProps> = ({ form, onFinish }) => {
  const getInfo = () => {
    const storage = localStorage.getItem('ansTools');
    if (storage) {
      const data = JSON.parse(storage).quotation;
      form.setFieldValue('name', data.name);
      form.setFieldValue('phone', data.phone);
      form.setFieldValue('email', data.email);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className={styles.pdf_form_container}>
      <h1 style={{ marginBottom: 24 }}>報價單資訊</h1>
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        labelAlign="left"
        name="quotation"
        style={{ width: '100%' }}
        onFinish={onFinish}
        initialValues={{ quote_date: dayjs(), haveTax: false }}
      >
        <Form.Item<QuotationProps>
          label="檔案名稱"
          name="file_name"
          rules={[{ required: true, message: '請輸入檔案名稱' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<QuotationProps>
          label="標題"
          name="title"
          rules={[{ required: true, message: '請輸入標題' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<QuotationProps>
          label="客戶名稱"
          name="customer"
          rules={[{ required: true, message: '請輸入客戶名稱' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="聯絡人" name="contact_name">
          <Input />
        </Form.Item>
        <Form.Item<QuotationProps>
          label="聯絡人信箱"
          name="contact_email"
          rules={[{ type: 'email', message: '請輸入正確的信箱格式' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<QuotationProps>
          label="報價日期"
          name="quote_date"
          rules={[{ required: true, message: '請輸入報價日期' }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item<QuotationProps>
          label="報價人員"
          name="quote_name"
          rules={[{ required: true, message: '請輸入報價單名稱' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<QuotationProps>
          label="案件名稱"
          name="case_name"
          rules={[{ required: true, message: '請輸入案件名稱' }]}
        >
          <Input />
        </Form.Item>

        <Divider />

        <Form.List
          name="items"
          initialValue={[
            { name: '', description: '', quantity: '1', unit_price: '' },
          ]}
        >
          {(fields, { add, remove }) => (
            <div>
              {fields.map(({ key, name, ...restField }, index) => (
                <div key={key}>
                  <Row style={{ marginBottom: 16, alignItems: 'center' }}>
                    <Col span={4}>{`項目 ${index + 1}`}</Col>
                    <Col span={20}>
                      <Space>
                        {index !== 0 && (
                          <Button
                            type="text"
                            onClick={() => remove(index)}
                            icon={<MinusCircleOutlined />}
                          />
                        )}
                        {(index === 0 && fields.length === 1) ||
                        index === fields.length - 1 ? (
                          <Button
                            type="text"
                            onClick={() => add()}
                            icon={<PlusCircleOutlined />}
                          />
                        ) : null}
                      </Space>
                    </Col>
                  </Row>
                  <Form.Item<QuotationProps['items']>
                    label="數量"
                    {...restField}
                    name={[name, 'quantity']}
                    rules={[{ required: true, message: '請輸入數量' }]}
                  >
                    <Select>
                      <Select.Option value="1">1</Select.Option>
                      <Select.Option value="2">2</Select.Option>
                      <Select.Option value="3">3</Select.Option>
                      <Select.Option value="4">4</Select.Option>
                      <Select.Option value="5">5</Select.Option>
                    </Select>
                  </Form.Item>

                  <Form.Item<QuotationProps['items']>
                    {...restField}
                    label="項目名稱"
                    name={[name, 'name']}
                    rules={[{ required: true, message: '請輸入項目名稱' }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item<QuotationProps['items']>
                    {...restField}
                    label="單價"
                    name={[name, 'unit_price']}
                    rules={[{ required: true, message: '請輸入單價' }]}
                  >
                    <Input type="number" />
                  </Form.Item>
                  <Form.Item<QuotationProps['items']>
                    {...restField}
                    name={[name, 'description']}
                    label="說明"
                    style={{ width: '100%' }}
                    rules={[{ required: true, message: '請輸入描述' }]}
                  >
                    {/* @ts-expect-error: ts(2739) antd form will pass props to editor automatically  */}
                    <TextEditor />
                  </Form.Item>
                </div>
              ))}
            </div>
          )}
        </Form.List>
        <Form.Item<QuotationProps>
          label="是否含稅"
          name="haveTax"
          valuePropName="checked"
        >
          <Checkbox />
        </Form.Item>
        <Divider />
        <Space
          style={{
            alignItems: 'center',
            marginBottom: 16,
            color: '#c0c0c0',
            fontSize: 12,
          }}
        >
          <InfoCircleOutlined />
          <span>此區於第一次產生報價單後會記錄您的資訊</span>
        </Space>
        <Form.Item<QuotationProps>
          label="負責人"
          name="name"
          rules={[{ required: true, message: '請輸入負責人名稱' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<QuotationProps>
          label="電話"
          name="phone"
          rules={[{ required: true, message: '請輸入電話號碼' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<QuotationProps>
          label="Email"
          name="email"
          rules={[
            { required: true, message: '請輸入電子信箱' },
            { type: 'email', message: '請輸入正確的信箱格式' },
          ]}
        >
          <Input />
        </Form.Item>
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}
        >
          <Button type="primary" htmlType="submit">
            產生PDF
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default PDFForm;

interface PDFFormProps {
  form: FormInstance<any>;
  onFinish: (values: QuotationProps) => void;
}
