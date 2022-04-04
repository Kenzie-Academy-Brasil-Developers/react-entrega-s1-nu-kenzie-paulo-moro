import Card from "../Card"
import "./style.css"
import React from "react"
import { useState } from "react"


function List({listTransactions, setListTransactions}){
  const [filtroEntrada, setFiltroEntrada] = useState(false)
  const [filtroSaida, setFiltroSaida] = useState(false)
  const [filtroTodos, setFiltroTodos] = useState(false)


  function handleEntrada(){
    setFiltroEntrada(true)
    setFiltroSaida(false)
    setFiltroTodos(false)
  }
  function handleSaida(){
    setFiltroSaida(true)
    setFiltroTodos(false)
    setFiltroEntrada(false)
  }
  function handleTodos(){
    setFiltroTodos(true)
    setFiltroEntrada(false)
    setFiltroSaida(false)
  }
  function RenderTransactions(){
    if(filtroEntrada){
      const filterByIn = listTransactions.filter((transaction)=>{
        return transaction.type === "entrada"
      })
      if(filterByIn.length !== 0){
        return(
          <>
            {filterByIn.map((transaction, index)=>(
                  
              <Card transaction={transaction} key={index} setListTransactions={setListTransactions} listTransactions={listTransactions}/>     
      
            ))}
          </>
        )
      }
      else{
        <>
          <p>Você não possui nenhum lançamento</p>
        </>
      }
    }
    else if(filtroSaida){
      const filterByOut =listTransactions.filter((transaction)=>{
        return transaction.type === "saída"
      })
      if(filterByOut.length !== 0){
        return(
          <>
            {filterByOut.map((transaction, index)=>(
                  
              <Card transaction={transaction} key={index} setListTransactions={setListTransactions} listTransactions={listTransactions}/>     
      
            ))}
          </>
        )
      }
      else{
        <>
          <p>Você não possui nenhum lançamento</p>
        </>
      }
    }
    else if(filtroTodos){
      if(listTransactions.length !== 0){
        return(
          <>
            {listTransactions.map((transaction, index)=>(
                  
              <Card transaction={transaction} key={index} setListTransactions={setListTransactions} listTransactions={listTransactions}/>     
      
            ))}
          </>
        )
      }
      else{
        <>
          <p>Você não possui nenhum lançamento</p>
        </>
      }
    }
  }
  
  return(
    <ul className="container--listaTransacoes">
      <span className="container--tituloFiltros">
        <h2 className="listaTransacoes--titulo">Resumo Financeiro</h2>
        <input className="inputRadio" type="radio" name="transacoes" value="todos" id="todos"  onClick={handleTodos}/>
        <label className="transacoes--Label" htmlFor="todos">Todos</label>
        <input className="inputRadio" type="radio" name="transacoes" value="entrada" id="entrada" onClick={handleEntrada}/>
        <label className="transacoes--Label" htmlFor="entrada">Entrada</label>
        <input className="inputRadio" type="radio" name="transacoes" value="saída" id="despesas" onClick={handleSaida}/>
        <label className="transacoes--Label" htmlFor="despesas">Despesas</label>
      </span>
      <RenderTransactions/>
    </ul>
    
  )

}


export default List