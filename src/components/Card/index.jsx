import "./style.css"
import trash from "./../../files/img/trash.png"

function Card(transaction,{setListTransactions,listTransactions}){
  const {description, type, value, id} = transaction.transaction
  function rmvTransaction(event){
    const cardId = event.target.id
    setListTransactions(listTransactions.filter((transact)=>{
      return transact.id !== cardId
    }))
    
  }

  /*type === "entrada"?( 
    <li className="card entrada" key={id}  >
    <h1 className="card--tittle">{description}</h1>
    <p className="card--type">{type}</p>
    <p className="card--value">R$ {value},00</p>
    <button  className="rmvBTN" ><img src={trash} alt="lataDelixo" /></button>
    </li>
  ):type === "saída"?(
    <li className="card saida" key={id}>
        <h1 className="card--tittle">{description}</h1>
        <p className="card--type">{type}</p>
        <p className="card--value">R$ {value},00</p>
        <button className="rmvBTN" onClick={removeTransaction}><img src={trash} alt="lataDelixo" /></button>
      </li>
  )*/
 
  if(type === "entrada"){
    return(      

      <li className="card entrada" key={id}  >
        <h1 className="card--tittle">{description}</h1>
        <p className="card--type">{type}</p>
        <p className="card--value">R$ {value},00</p>
        <button className="rmvBTN" onClick={rmvTransaction}><img id={id} src={trash} alt="lataDelixo" /></button>
      </li>
      
    )
  }
  else if(type === "saída"){
    return(      

      <li className="card saida" key={id}>
        <h1 className="card--tittle">{description}</h1>
        <p className="card--type">{type}</p>
        <p className="card--value">R$ {value},00</p>
        <button className="rmvBTN" onClick={rmvTransaction}><img id={id} src={trash} alt="lataDelixo" /></button>
      </li>
      
    )
  }
}



export default Card