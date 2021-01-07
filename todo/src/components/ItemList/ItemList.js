import React from 'react';
import Item from '../Item/Item';
import style from './ItemList.module.css';

const ItemList = ({ items }) => (<ul className={style.list}>
  {items.map(item => <li key={item.value} className={style.item}><Item value={item.value} isDone={item.isDone} /></li>)}
</ul>)

export default ItemList;
