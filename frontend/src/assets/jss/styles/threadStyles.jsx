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
    justifyContent: 'center',
  },
  thumbnail: {
    width: '100px',
    height: '100px',
    margin: '0 15px',
  },
  buttonDiv: {
    display: 'flex',
    fontSize: '11px',
    color: 'rgb(100, 100, 100)',
    flexGrow: 1,
  },
  posted: {
    flexGrow: 1,
  },
  iconButtons: {
    margin: '0 5px',
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
};

export default threadStyles;
