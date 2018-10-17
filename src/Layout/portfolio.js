import React, { Component } from 'react';
import { Grid, Tab, Tabs, Paper, Typography } from 'material-ui';
import SimpleMediaCard from '../Components/SimpleMediaCard.js';
import dataAPI from '../Data/dataAPI.js';
import Header from '../Main-Components/header.js';
import Tooltip from 'material-ui/Tooltip';

const _tabsStyle = {
  padding: '10px'
}

const mainGutter = {
  marginBottom: '100px'
}


let arr = dataAPI["projects"];

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      value: 4,
      portfolioHeadline: ""
    }
  }

  handleChange = (event, value) => {
    let result;
    if (value === 0) {
      result = arr.filter((element, index) => element.category === "react");
    }
    if (value === 1) {
      result = arr.filter((element, index) => element.category === "JS");
    }
    if (value === 2) {
      result = arr.filter((element, index) => element.category === "Website");
    }
    if (value === 3) {
      result = arr.filter((element, index) => element.category !== "");
    }

    this.setState({
      arr: result,
      value: value
    });

  };


  render() {



    const welcomeMessage = () => {
      if (this.state.arr.length === 0) {
        return <div><h1>Klikk på tabs for å se noen utvalgte projekter</h1>
          <Typography variant="caption" gutterBottom align="center">(Samtlige prosjekter ble utviklet i 2018 med unntak av Websider)</Typography>
        </div>
      }
    }

    const tabHeadline = () => {
      if (this.state.value === 2) {
        return <h2></h2>

      }
      if (this.state.value === 0) {
        return <h2></h2>
      }
      if (this.state.value === 1) {
        return <h2></h2>
      }

    }


    const arr1 = this.state.arr.map((x, index) =>

      <SimpleMediaCard key={index} headline={this.state.arr[index].headline} comment={this.state.arr[index]._content} _img={this.state.arr[index]._img}
        _link={this.state.arr[index]._link} chips={this.state.arr[index].tech} gitLink={this.state.arr[index].gitLink}
      />
    );



    return (
      <div style={mainGutter}>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Paper style={_tabsStyle}>
              <Tabs
                indicatorColor="primary"
                textColor="primary"
                centered
                value={this.state.value}
                onChange={this.handleChange}
              >
                <Tab label="React" />
                <Tab label="Javascript" />
                <Tab label="Websites" />
                <Tab label="All /" />
              </Tabs>
            </Paper>
          </Grid>
        </Grid>

        <Grid container
          justify="center">
          <Grid container justify="center">
            {welcomeMessage()}
            {tabHeadline()}
          </Grid>

          <Grid item xl={8} lg={8} md={12} xs={12}>
            <Grid container justify="center">
              {arr1}
            </Grid>
          </Grid>

        </Grid>
      </div>
    );

  }

}




export default Portfolio;
