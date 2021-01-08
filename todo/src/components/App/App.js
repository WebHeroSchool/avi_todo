import React from 'react';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';

const App = () => {

  const items = [
    {
      value: 'Задача № 1'
    },
    {
      value: 'Задача № 2'
    },
    {
      value: 'Задача № 3'
    }
  ];

  return (<div>
    <h1>Список</h1>
    <InputItem />
    <ItemList items={items} />
    <Footer count={5} />
  </div>
  );
}

export default App;