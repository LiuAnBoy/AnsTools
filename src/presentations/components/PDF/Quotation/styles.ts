import { Font, StyleSheet } from '@react-pdf/renderer';

const PDFStyles = () => {
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
    ],
  });

  const styles = StyleSheet.create({
    page: {
      fontFamily: 'Roboto',
    },
    header: {
      padding: '42px 36px',
      backgroundColor: '#32576B',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 36,
      color: 'white',
      fontWeight: 500,
    },
    subTitle_zh: {
      fontSize: 24,
      textAlign: 'center',
      color: 'white',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    subTitle_us: {
      fontSize: 20,
      textAlign: 'center',
      color: 'white',
      fontWeight: 500,
      lineHeight: 1.2,
    },
  });

  return styles;
};

export default PDFStyles;
