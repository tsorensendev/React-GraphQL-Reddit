import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';

// Icons
import { ArrowDownward, ArrowUpward, ModeComment } from '@material-ui/icons';

// Styles
import threadStyles from '../../assets/jss/styles/threadStyles';


// Thread needs
// Votes - Thumbnail
// Title - Link
// Subreddit - Posted by - Use unix timestamp to compare how long ago a post was
// Buttons for comment, share, save, gold, hide and report

const Thread = (props) => {
  const {
    classes, votes, thumbnail, title, link, sub, poster, timePosted, commentCount,
  } = props;
  return (
    // Give this div flex, have three child divs, one for votes,
    // one for thumbnail and one for everything else
    <div className={classes.threadContainer}>
      <div className={classes.votes}>
        <ArrowUpward />
        <p>{votes}</p>
        <ArrowDownward />
      </div>
      <div className={classes.thumbnail}>
        {/* Thumbnail for post, probably not going to use Avatar in the end */}
        <img src={thumbnail} alt="Post Thumbnail" />
      </div>
      <div>
        <h2><a href={link}>{title}</a></h2>
        <p><small><span>{`/r/${sub}`}</span><span>{`Posted by ${poster}, ${timePosted} hours ago`}</span></small></p>
        <div className={classes.buttonDiv}>
          <ModeComment /><span>{commentCount === 0 ? 'Comment ' : `${commentCount} comments `}</span>
          <icon>Share </icon>
          <icon>Save </icon>
          <icon>Gold </icon>
          <icon>Hide </icon>
          <icon>Report</icon>
        </div>
      </div>
    </div>
  );
};

Thread.defaultProps = {
  votes: 0,
  thumbnail: 'https://via.placeholder.com/100x100',
  commentCount: 0,
  timePosted: moment(),
};

Thread.propTypes = {
  classes: PropTypes.object.isRequired,
  votes: PropTypes.number,
  thumbnail: PropTypes.string,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  timePosted: PropTypes.string,
  commentCount: PropTypes.number,
};

export default withStyles(threadStyles)(Thread);
