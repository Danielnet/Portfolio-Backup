import React, { Component } from 'react';
import kompetanse from '../Data/kompetanseAPI.js';
import seckompetanse from '../Data/kompetanseAPI.js';
import { Grid, Paper, Typography, Chip, Button, Divider } from 'material-ui';
import Folder from '@material-ui/icons/Folder';
//import Divider from '@material-ui/core/Divider';


const sectionStyle = {
  paddingTop: '50px',
  paddingBottom: '50px'
};

const iconStyle = {
  width: '4em',
  height: '4em',
  color: 'rgb(10, 114, 135)'

};


const bottomSection = {
  paddingBottom: '150px',
};



class Kompetanse extends Component {
  render() {
    return (
      <div>
        <Paper style={bottomSection}>
          <Grid container justify="center" style={sectionStyle}>
            <Grid item lg={5} md={12}>
              <Grid container justify="center">
                <Grid container justify="center">
                  <Typography variant="display1" gutterBottom="true" paragraph="true">
                    Kjernekompetanse
                  </Typography>
                </Grid>
                <Grid container justify="center">
                  <Typography variant="p" gutterBottom="true" paragraph="true">
                  </Typography>
                </Grid>
                <Typography variant="p" gutterBottom="true" paragraph="true">
                  <Chip key="7" label="React"></Chip>
                  <Chip key="7" label="Redux"></Chip>
                  <Chip key="3" label="Javascript/ES6"></Chip>
                  <Chip key="1" label="HTML5"></Chip>
                  <Chip key="2" label="Css/Scss"></Chip>
                  <Chip key="5" label="Responsive Design"></Chip>
                  <Chip key="6" label="API/REST Frontend"></Chip>
                  <Chip key="6" label="Material UI"></Chip>
                  <Chip key="8" label="Bootstrap"></Chip>
                  <Chip key="9" label="JQuery"></Chip>
                  <Chip key="10" label="Git"></Chip>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          <Grid container justify="center" style={sectionStyle}>
            <Grid item lg={5} md={12}>
              <Grid container>
                <Grid container justify="center">
                  <Typography variant="display1" gutterBottom="true" paragraph="true">
                    Generell kunnskap
                  </Typography>
                </Grid>
                <Grid container justify="center">
                  <Typography variant="p" gutterBottom="true" paragraph="true">
                  </Typography>
                </Grid>
                <Grid container justify="center">
                  <Typography variant="caption" gutterBottom="true" paragraph="true">
                    {kompetanse}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Divider />
        </Paper>
      </div>
    );
  }
}

export default Kompetanse;
