import './App.css';
import React from 'react';
import { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import TotalCard from './components/TotalCard';
import Nukenzie from "./files/img/NuKenzie.png"

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 }
  ])

  function addTransaction(newTransaction){
    if(listTransactions.length > 0){
      setListTransactions([...listTransactions, newTransaction])
    }else{
      setListTransactions([newTransaction])
    }
  } 
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={Nukenzie} alt='nukenzieLogo'></img>
        <button className='header--toHome'>Inicio</button>        
      </header>
      <main className='main'>
        <Form addTransaction={addTransaction}/>
        <TotalCard listTransactions={listTransactions}/>
        <List listTransactions={listTransactions} setListTransactions = {setListTransactions}/>
      </main>
    </div>
  );
}

export default App;
