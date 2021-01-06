import React from 'react';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import style from './App.module.css';

const App = () => {

  const items = [
    {
      value: 'Задача № 1',
      isDone: false
    },
    {
      value: 'Задача № 2',
      isDone: false
    },
    {
      value: 'Задача № 3',
      isDone: true
    }
  ];

  return (<div className={style.wrapper}>
    <h1 className={style.title}>Список задач</h1>
    <InputItem />
    <ItemList items={items} />
    <Footer count={5} />
  </div>
  );
}

export default App;