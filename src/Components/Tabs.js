import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';

const styles = {
  root: {
    flexGrow: 1,
    paddingBottom:12,
    paddingBottom:12,
  },
  _tabs: {
    color:'rgb(0, 212, 255)'
  }
};

const _tabs = {
color:'rgb(0, 212, 255)'
};





class CenteredTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          centered
        >

          <Tab label="React.js" />
          <Tab label="Javascript" />
          <Tab label="Websites" />
          <Tab label="All" className={_tabs}/>
        </Tabs>
      </Paper>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredTabs);
