import React from 'react';
import { MenuList, MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Folder from '@material-ui/icons/Folder';
import Work from '@material-ui/icons/Work';



function DrawerContent(props) {

  const root = {
    maxwidth: '360px'
  }

  const avatar = {
    height: '80px',
    width: '80px',
    margin: '20px auto',
  };

  const _drawerMenu = {
    width: '250px'
  };

  const _a = {
    textDecoration: 'none',
  };

  const _width = {
    width: '1em',
    maxWidth: 360,
    color: 'rgb(5, 163, 181)'
  };


  return (
    <div>

      <Avatar
        alt="Avatar"
        src="https://www.w3schools.com/howto/img_avatar.png"
        style={avatar} />
      <Paper style={_drawerMenu}>
        <MenuList>
          <a href="/portfolio/#/kompetanse" style={_a}>
            <MenuItem>
              <ListItemIcon style={_width}>
                <Work />
              </ListItemIcon>
              <ListItemText inset primary="Kompetanse" />
            </MenuItem>
          </a>
          <a href="/portfolio" style={_a}>
            <MenuItem>
              <ListItemIcon style={_width}>
                <Folder />
              </ListItemIcon>
              <ListItemText inset primary="Portfolio" />
            </MenuItem>
          </a>
          <MenuItem>
            <Button disabled>
              Kontakt meg
          </Button>
          </MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
}

export default DrawerContent;
