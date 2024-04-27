import type { ThemeConfig } from 'antd';

const defaultColor = {
  primary: '#1c1c20',
  secondary: '#f6f5f4',
  text: {
    primary: '#012a42',
    secondary: '#fff',
  },
};

const theme: ThemeConfig = {
  token: {
    colorPrimary: defaultColor.primary,
    colorPrimaryBg: defaultColor.secondary,
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    Layout: {
      headerBg: defaultColor.primary,
      footerBg: defaultColor.primary,
      colorText: defaultColor.text.secondary,
    },
    Card: {
      headerBg: defaultColor.primary,
      colorTextHeading: defaultColor.text.secondary,
    },
    Menu: {
      colorText: defaultColor.text.primary,
      controlItemBgActive: defaultColor.primary,
      itemSelectedColor: defaultColor.text.secondary,
    },
    Button: {
      colorLink: defaultColor.text.primary,
      colorLinkActive: defaultColor.text.secondary,
      colorLinkHover: defaultColor.text.primary,
    },
    Dropdown: {
      controlPaddingHorizontal: 24,
    },
  },
};

export default theme;
