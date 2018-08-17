import { defaultFont } from '../primary-styles';

const threadStyles = {
  threadContainer: {
    ...defaultFont,
    display: 'flex',
    marginBottom: '10px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.5)',
    padding: '15px',
  },
  votes: {
    fontSize: '10px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  thumbnail: {
    width: '100px',
    height: '100px',
    margin: '0 15px',
  },
};

export default threadStyles;
