import "./style.css"

function Form({addTransaction}){
  
  let counter = 3
  function idGen(){
    counter++
    return counter.toString()
  }

  function captureDataForm(event){
    const form = event.target
    const dataForm = {}
    if(form.tagName === "FORM"){
      for(let i = 0; i < form.length; i++){
        if(form[i].name && form[i].value !== ""){ 
          dataForm[form[i].name] = form[i].value         
            
          if(form[i].name === "type"){

            if(dataForm.type === "saída"){
              dataForm.value = dataForm.value*-1
              
            }
          }
          
        }
      }
      if(dataForm.hasOwnProperty("value")){
        dataForm.id = idGen()
      }
      
    }
  
    
    return dataForm
  }
  
  function handleSubmit(event){
    event.preventDefault()
    if(!isNaN(captureDataForm(event).value) && captureDataForm(event).description){
      addTransaction(captureDataForm(event))
    }
    
  }
    
  return(
    
    <form className="container--formularioRegistro" onSubmit={handleSubmit}>
      <label htmlFor="Descricao" className="form--container--description">
        <h3 className="form--titulo-h3">Descrição</h3>
        <input className="form--inputDescricao"
          name ="description" 
          type="text" 
          placeholder="Informe a descrição"
          id="Descricao"
        />
        <p className="form--descricao--exemplo">Ex:Compra de Roupas</p>
      </label>
      <label htmlFor="valor" className="form--container--valor">
        <h3 className="form--titulo-h3">Valor</h3>
        <input className="form--inputValor" 
          name = "value" 
          type="number" 
          placeholder="Informe o valor" 
          id="valor"
        />
        <p className="form--valor--R">R$</p>
      </label>
      <label htmlFor="typeSelect" className="form--container--tipo">
        <h3 className="form--titulo-h3">Tipo de valor</h3>
        <select className="form--selectType" name="type" id="typeSelect" >
          <option className="form--select-option" value="entrada">Entrada</option>
          <option className="form--select-option" value="saída">Saída</option>        
        </select>
      </label>
      
      <button className="Form--sendBTN">Enviar</button>
    </form>
    
  )
}

export default Form