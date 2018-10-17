import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Toolbar from 'material-ui/Toolbar';
import Tooltip from 'material-ui/Tooltip';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerContent from '../Components/Drawer-Content.js';


const _left= {flex:1}

const _mid= {flex:2}


const appBarStyle = {
  backgroundColor:'rgb(36, 96, 142)',
  height:'250px',
  background: 'rgb(2,0,36)',
  background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,118,1) 0%, rgb(10, 114, 135) 61%)',
}


const headerGutter = {
  marginBottom:'70px'
}

const header_a = {
  color:'#ebebeb',
  textDecoration:'none',
  fontSize: '0.8rem',
  textTransform:'none'
}



class Header extends Component {
  constructor(props) {

    super(props);
    this.state = {
      open: false,

    };
  }



  _toggleDrawer = () => {
    this.setState({open: !this.state.open})
  }


  render() {





    return (

      <div>
        <AppBar position="static" color="primary" style={appBarStyle}>
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" onClick={this._toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" style={_left}>
              Menu
            </Typography>

            <Typography variant="title" color="inherit" >
              Portfolio
            </Typography>
          </Toolbar>
          <div>
            <Grid container justify="center">

              <Typography variant="display3" color="inherit">
                Daniel Eidså

              </Typography>
            </Grid>

            <Grid container justify="center">
              <Typography variant="Subheading" color="inherit" style={headerGutter}>

                <a href="https://github.com/Danielnet" style={header_a}>
                <Tooltip id="tooltip-icon" title="Gå til Github Konto">
                  <Button style={header_a}> GitHub</Button>
                </Tooltip>
              </a>

              /

              <a href="https://codepen.io/Daniel-Codepen/" style={header_a}>
              <Tooltip id="tooltip-icon" title="Gå til CodePen Konto">
                <Button style={header_a}> Codepen </Button>
              </Tooltip>
            </a>

            /

            <a href="https://www.freecodecamp.org/portfolio/danielnet" style={header_a}>
            <Tooltip id="tooltip-icon" title="Gå til FCC Konto">
              <Button style={header_a}> FreeCodeCamp </Button>
            </Tooltip>
          </a>

        </Typography>
      </Grid>

    </div>
  </AppBar>
  <Drawer open ={this.state.open} variant="temporary" onClose={this._toggleDrawer} docked="false">
    <DrawerContent />
  </Drawer>
</div>
);
}
}

export default Header;
