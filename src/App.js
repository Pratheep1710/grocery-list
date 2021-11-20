import React, {useState, useEffect} from 'react';

import './App.css';

import { getList, setItem } from './services/list';

function App() {
  const [itemInput, setItemInput] = useState('');
  const[list, setList] = useState([]);
  const [alert, setAlert] = useState(false);
  let mounted = true;

  useEffect (() => {
    if(list.length && !alert) {
      return;
    }
    getList().then(items => {
      if(mounted){
        setList(items)
      }
    })
    return () => mounted = false;
  }, [alert, list])

  useEffect (() => {
    if(alert){
      setTimeout(()=>{
        if(mounted){
        setAlert(false);
        }
      }, 1000)
    }
  }, [alert])

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem(itemInput)
    .then(() => {
      setItemInput('');
      setAlert(true);
    }
   )
  };

  const handleChange = (event) => {
    setItemInput(event.target.value);
    console.log(itemInput);
  }


  return (
    <div className="wrapper">
     <h1>My Grocery lsit</h1>
     <ul>
       {list.map(item => <li key={item.id}>{item.item}</li>)}
     </ul>
     { alert && <h2>Submitted Successfully</h2> }
     <form onSubmit={handleSubmit}>
       <label>
         <p>New Item</p>
         <input type="text" onChange={handleChange} value={itemInput} />
       </label>
       <button type="submit">Submit</button>
     </form>
    </div>
  );
}

export default App;
