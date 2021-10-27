import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import VisibilityIcon from '@material-ui/icons/Visibility';

import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Discover } from './Discover';

export const Navlist = (props) => {
  const [openSearch, setOpenSearch] = useState(false);

  const closeSearch = () => {
    setOpenSearch(false);
  };

  const toggleSearch = () => setOpenSearch((value) => !value);
  return (
    <>
      {!openSearch ? (
        <List>
          {props.items.map((field) => (
            <ListItem button component={Link} to={field.route} onClick={props.drawerClose} key={field.id}>
              <ListItemIcon>{field.icon}</ListItemIcon>
              <ListItemText primary={field.text} />
            </ListItem>
          ))}
          <ListItem button onClick={toggleSearch}>
            <ListItemIcon>
              <VisibilityIcon />
            </ListItemIcon>
            <ListItemText primary="Discover Movies" />
          </ListItem>
        </List>
      ) : (
        <List>
          <Discover drawerClose={props.drawerClose} closeSearch={closeSearch} />
        </List>
      )}
    </>
  );
};

Navlist.propTypes = {
  items: PropTypes.array.isRequired,
  drawerClose: PropTypes.func.isRequired,
};
