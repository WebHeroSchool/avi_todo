import React from 'react';
import style from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div className={style.field}>
  <TextField
    id="standard-dense"
    label="Добавить задание"
    margin="dense"
  />
</div>);

export default InputItem;
