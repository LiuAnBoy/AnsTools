import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import dayjs from 'dayjs';
import { FC } from 'react';
import { Html } from 'react-pdf-html';

import { QuotationProps } from '@/app/function/quotation-generator/page';

import Field from './Field';
import { PDFRenderProps } from './PDFRender';

const PDFDoc: FC<PDFRenderProps> = ({ data }) => {
  const priceCount = (items: QuotationProps['items']) => {
    const totalPrice = items.reduce(
      (acc, curr) => acc + parseInt(curr.unit_price),
      0,
    );
    const totalPriceString = parseInt(totalPrice.toString(), 10).toString();
    const formattedPrice = totalPriceString.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ',',
    );

    return `NT$ ${formattedPrice}`;
  };

  Font.register({
    family: 'Roboto',
    fonts: [
      {
        src: '/fonts/NotoSansTC-Regular.ttf',
        fontStyle: 'normal',
        fontWeight: 400,
      },
      {
        src: '/fonts/NotoSansTC-Medium.ttf',
        fontStyle: 'normal',
        fontWeight: 500,
      },
      {
        src: '/fonts/NotoSansTC-Bold.ttf',
        fontStyle: 'normal',
        fontWeight: 700,
      },
      {
        src: '/fonts/Roboto-Regular.ttf',
        fontStyle: 'normal',
        fontWeight: 400,
      },
      {
        src: '/fonts/Roboto-Medium.ttf',
        fontStyle: 'normal',
        fontWeight: 500,
      },
      {
        src: '/fonts/Roboto-Bold.ttf',
        fontStyle: 'normal',
        fontWeight: 700,
      },
    ],
  });

  const styles = StyleSheet.create({
    page: {
      fontFamily: 'Roboto',
      position: 'relative',
    },
    header: {
      padding: '26px 36px',
      backgroundColor: '#32576B',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: 36,
      color: 'white',
      fontWeight: 500,
    },
    subTitle_zh: {
      fontSize: 20,
      textAlign: 'center',
      color: 'white',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    subTitle_us: {
      fontSize: 16,
      textAlign: 'center',
      color: 'white',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    body: {
      padding: '28px 36px',
      width: '100%',
    },
    info: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 28,
    },
    form: {},
    column_title_border: {
      border: '1px solid #c1c0c0',
      textAlign: 'center',
      padding: '6px 0',
      fontSize: 12,
      backgroundColor: '#c8c9ca',
    },
    column_title_border_other: {
      borderTop: '1px solid #c1c0c0',
      borderRight: '1px solid #c1c0c0',
      borderBottom: '1px solid #c1c0c0',
      textAlign: 'center',
      padding: '6px 0',
      fontSize: 12,
      backgroundColor: '#c8c9ca',
    },
    column_body_border: {
      borderLeft: '1px solid #c1c0c0',
      borderRight: '1px solid #c1c0c0',
      borderBottom: '1px solid #c1c0c0',
      textAlign: 'center',
      padding: '2px 0',
      fontSize: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    column_body_border_html: {
      borderRight: '1px solid #c1c0c0',
      borderBottom: '1px solid #c1c0c0',
      textAlign: 'center',
      padding: '2px 0',
      fontSize: 10,
    },
    column_body_border_other: {
      borderRight: '1px solid #c1c0c0',
      borderBottom: '1px solid #c1c0c0',
      textAlign: 'center',
      padding: '2px 0',
      fontSize: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    column_footer_border: {
      borderLeft: '1px solid #c1c0c0',
      borderBottom: '1px solid #c1c0c0',
      borderRight: '1px solid #c1c0c0',
      textAlign: 'center',
      padding: '6px 0',
      fontSize: 12,
      backgroundColor: '#e0e0e0',
    },
    column_footer_border_other: {
      borderBottom: '1px solid #c1c0c0',
      borderRight: '1px solid #c1c0c0',
      textAlign: 'center',
      padding: '6px 0',
      fontSize: 12,
      backgroundColor: '#e0e0e0',
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      padding: '0px 36px 28px 36px',
      width: '100%',
    },
    precaution: {
      flexDirection: 'column',
      marginBottom: 8,
    },
    precaution_title: {
      fontSize: 10,
    },
    precaution_content: {
      fontSize: 8,
    },
    footer_info: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
  });

  if (!data) return null;

  return (
    <Document title={data.file_name}>
      <Page size="A4" style={styles.page}>
        <View wrap style={styles.header}>
          <Text style={styles.title}>{data ? data.title : '標題'}</Text>
          <View style={{ width: 116 }}>
            <Text style={styles.subTitle_zh}>報價單</Text>
            <Text style={styles.subTitle_us}>QUOTATION</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.info}>
            <View style={{ width: '52%' }}>
              <Field field="客戶名稱" value={data.customer} />
              <Field field="聯絡人" value={data.contact_name} />
              <Field field="聯絡人信箱" value={data.contact_email} />
              <Field field="案件名稱" value={data.case_name} mb={false} />
            </View>
            <View style={{ width: '40%' }}>
              <Field
                field="報價日期"
                value={dayjs(data.quote_date).format('YYYY/MM/DD')}
              />
              <Field field="報價人員" value={data.quote_name} />
            </View>
          </View>

          <View>
            <View style={{ flexDirection: 'row', width: '100%' }}>
              <Text style={[styles.column_title_border, { width: '25%' }]}>
                項目
              </Text>
              <Text
                style={[styles.column_title_border_other, { width: '43%' }]}
              >
                項目說明
              </Text>
              <Text
                style={[styles.column_title_border_other, { width: '12%' }]}
              >
                數量
              </Text>
              <Text
                style={[styles.column_title_border_other, { width: '20%' }]}
              >
                價格
              </Text>
            </View>

            {data.items.map((item, index) => (
              <View key={index} style={{ flexDirection: 'row', width: '100%' }}>
                <View style={[styles.column_body_border, { width: '25%' }]}>
                  <Text>{item.name}</Text>
                </View>

                <Html
                  style={[styles.column_body_border_html, { width: '43%' }]}
                >
                  {item.description}
                </Html>
                <View
                  style={[styles.column_body_border_other, { width: '12%' }]}
                >
                  <Text>{item.quantity}</Text>
                </View>
                <View
                  style={[styles.column_body_border_other, { width: '20%' }]}
                >
                  <Text>
                    {item.unit_price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </Text>
                </View>
              </View>
            ))}
            <View>
              <View style={{ flexDirection: 'row', width: '100%' }}>
                <View style={[styles.column_footer_border, { width: '80%' }]}>
                  <Text>總價</Text>
                </View>
                <View
                  style={[styles.column_footer_border_other, { width: '20%' }]}
                >
                  <Text>{priceCount(data.items)}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.precaution}>
            <Text style={styles.precaution_title}>付款條件：</Text>
            <Text style={styles.precaution_content}>
              一、本報價單經雙方簽訂確認後,視同買賣契約。
            </Text>
            <Text style={styles.precaution_content}>
              二、本報價單有效限期為報價日期起七天內有效。
            </Text>
            <Text style={styles.precaution_content}>
              三、如遇中途變更、追加內容須由雙方另行商議。
            </Text>
            <Text style={styles.precaution_content}>
              四、請以匯款或現金支付款項。
            </Text>
          </View>
          <View style={styles.footer_info}>
            <View style={{ flexDirection: 'column', width: '50%' }}>
              <View
                style={{
                  flexDirection: 'row',
                  fontSize: 10,
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    width: 50,
                  }}
                >
                  負責人
                </Text>
                <Text style={{ marginRight: 8 }}>|</Text>
                <Text>{data.name}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  fontSize: 10,
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    width: 50,
                  }}
                >
                  電話
                </Text>
                <Text style={{ marginRight: 8 }}>|</Text>
                <Text>{data.phone}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  fontSize: 10,
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    width: 50,
                  }}
                >
                  Email
                </Text>
                <Text style={{ marginRight: 8 }}>|</Text>
                <Text>{data.email}</Text>
              </View>
            </View>

            <View style={{ width: '40%' }}>
              <Field field="客戶簽名" value="" mb={false} />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDoc;
