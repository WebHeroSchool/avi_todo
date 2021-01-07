import React from 'react';
import classnames from 'classnames';

import style from './Item.module.css';

const Item = ({ value, isDone }) => (<span className={
  classnames({
    [style.item]: true,
    [style.done]: isDone
  })
}>
  {value}
</span>);

export default Item;
