import React from 'react';
// import classnames from 'classnames';

import style from './Item.module.css';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Item = ({ value, isDone, classes, onClickDone }) => (
  
  <ListItem fullWidth>
    <ListItemIcon>
      <Checkbox
        checked={isDone}
        tabIndex={-1}
        onClick={() => console.log(isDone)}
      />
    </ListItemIcon>
    <ListItemText primary={value} classes={{
      root: isDone && style.done
    }} />
    <ListItemSecondaryAction>
      <IconButton edge="end" aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default Item;
