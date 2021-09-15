import React from 'react'
import Trade from './Trade'

function Trades({trades, onTradeDelete, }){

   

const tradeComponents = trades.map((trade) =>{
    return (
    <Trade 
    id={trade.id}
    trade = {trade}
    onTradeDelete = {onTradeDelete}    />
    )
})

    return(
        <div>
            {tradeComponents}
        </div>
    )
}
export default Trades;