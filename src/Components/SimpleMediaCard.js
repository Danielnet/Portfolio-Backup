import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Chip from 'material-ui/Chip';
import Tooltip from 'material-ui/Tooltip';
import Typography from 'material-ui/Typography';
import GitLogo from '../Data/git_icon.png';

const styles = {
  root: {
    display: 'inline-block',
    
  },
  card: {
    maxWidth: 300,
    minWidth: 300,
    margin: '10px',
    marginTop: '30px',
    
  },
  media: {
    height: 0,
    paddingTop: '46.25%', // 16:9
    '&:hover': {
      cursor: 'pointer'
    }
  },
  _h2: {
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline'
    }
  },
  cardContent: {
    minHeight:'210px'
  }
};



function SimpleMediaCard(props) {
  const { classes } = props;
  const git = props.gitLink;


  function _openWindow(e) {
    e.preventDefault()
    window.open(props._link)
  }

  function _openGit() {
    window.open(git)
  }

  const githubLink = (() => {
    if (git !== undefined) {
      return <Tooltip id="tooltip-icon" title="Kildekode"><Button variant="outlined" className={classes.button} onClick={_openGit}>
        <img style={{ height: '20px', marginRight: '5px' }} src={GitLogo}></img>
        Github
   </Button>

      </Tooltip>
    }
    else
      return <Button disabled color="primary" className={classes.button}>
        Github
</Button>




  });


  const arr = props.chips;
  const arr2 = arr.map((x, index) =>
    <Tooltip id="tooltip-icon" title={x}><Chip key={index} label={x}></Chip></Tooltip>
  );
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <a href={props._link} onClick={_openWindow}>
          <CardMedia
            className={classes.media}
            image={props._img}
          />
        </a>
        <CardContent className={classes.cardContent}>
          <a onClick={_openWindow}>
            <Typography gutterBottom variant="headline" component="h2" className={classes._h2}>
              {props.headline}
            </Typography>
          </a>
          <Typography component="p" gutterBottom >
            {props.comment}
          </Typography>
          <Typography gutterBottom>
          </Typography>
          {arr2}
        </CardContent>
        <CardActions>
          {githubLink()}
        </CardActions>
      </Card>
    </div>

  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
