

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: '300',
  lineHeight: '1.5em',
};

const primaryColor = '#0ccc81';
const secondaryColor = '#ff0094';
const warningColor = '#ff9800';
const errorColor = '#fc1d0c';
const successColor = '#41c147';
const darkGrayColor = '#6d6d6d';
const lightGrayColor = '#ededed';

const container = {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  '@media (min-width: 768px)': {
    width: '750px',
  },
  '@media (min-width: 992px)': {
    width: '970px',
  },
  '@media (min-width: 1200px)': {
    width: '1170px',
  },
  '&:before,&:after': {
    display: 'table',
    content: '" "',
  },
  '&:after': {
    clear: 'both',
  },
};

const boxShadow = {
  boxShadow:
    '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
};

export {
  container,
  primaryColor,
  secondaryColor,
  warningColor,
  errorColor,
  successColor,
  darkGrayColor,
  lightGrayColor,
  boxShadow,
  defaultFont,
};
