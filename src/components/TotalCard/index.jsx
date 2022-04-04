import "./style.css"

function TotalCard({listTransactions}){
    function totalValor(arrayObj){

        const total =arrayObj.reduce((valorAnterior, valorAtual)=>{
            return parseFloat(valorAtual.value) + valorAnterior
        },0)
        
        return total
    }
    return(
        <ul className="container--valorTotal">
            <li className="itemValorTotal">
                <h2>Valor Total:</h2>
                <p className="card--valorDescription">O valor se refere ao saldo</p>
                <p className="card--totalValor">R$ {totalValor(listTransactions)},00</p> </li>
        </ul>
    )
}


export default TotalCard