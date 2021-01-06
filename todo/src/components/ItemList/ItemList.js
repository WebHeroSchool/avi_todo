import React from 'react';
import Item from '../Item/Item';
import style from './ItemList.module.css';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';



// const ItemList = ({ items }) => (<ul className={style.list}>
//   {items.map(item => <li key={item.value} className={style.item}><Item value={item.value} isDone={item.isDone} /></li>)}
// </ul>)

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.dark,
  },
}));

export default function ItemList({ items }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav">
        {items.map(item => <ListItem button key={item.value} className={style.item}><Item value={item.value} isDone={item.isDone} /></ListItem>)}
      </List>
    </div>
  );
}

// export default ItemList;
