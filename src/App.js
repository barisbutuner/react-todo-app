import React, {useState} from 'react';
import './App.css';

function App() {

  const [newItem, setNewItem] = useState("");
  const [items,setItems] = useState ([])



  function addItem() {

    if(!newItem){
      alert("bir öğe girin");
      return;
    }

    const item = {
      id: Math.floor(Math.random()*10000),
      value: newItem
    }
    setItems(oldItems => [...oldItems,item])
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App">
      <h1>Todo List App</h1>

      <input 
      type="text"
      placeholder="Lütfen bir öğe ekle.."
      value={newItem}
      onChange={e => setNewItem(e.target.value)}
      />

      <button className="addButton" onClick={() => addItem()}>Ekle</button>
      <ul>
          {
            items.map(item => {
              return(
                <li key={item.id}>{item.value} <button className='deleteButton' onClick={() => deleteItem(item.id)}>X</button> </li>
              )
            })
          }
      </ul>
    </div>
  );
}

export default App;
