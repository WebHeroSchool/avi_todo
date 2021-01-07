import React from 'react';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import style from './App.module.css';

class App extends React.Component {
  state = {
    items: [
      {
        value: 'Задача № 1',
        isDone: false,
        id: 1
      },
      {
        value: 'Задача № 2',
        isDone: false,
        id: 2
      },
      {
        value: 'Задача № 3',
        isDone: true,
        id: 3
      }
    ],
    count: 7
  };

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = { ...item };
      if (item.id == id) {
        newItem.isDone = !newItem.isDone;
      }
      return newItem;
    });

    this.setState({ items: newItemList });
  };

  render() {

    return (<div className={style.wrapper}>
      <h1 className={style.title}>Список задач</h1>
      <InputItem />
      <ItemList items={this.state.items} onClickDone={this.onClickDone}/>
      <Footer count={this.state.count} />
    </div>
    );
  }
}

export default App;
