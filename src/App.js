import './App.css';
import React , {useState} from 'react'
// import {Item} from './Components/Item'
function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <navbar>
        <input type="text" />
        <FontAwesomeIcon icon="fa-solid fa-square-plus" />
      </navbar>
      {/* <Item /> */}
    </div>
  );
}

export default App;
