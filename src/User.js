import React from 'react'
import Notification from './Notifications'
import Trades from './Trades'

function User({borough, userName}) {
    
    
    return(
        <div>
        <h1> {userName} lives in {borough} </h1>
        
        <Trades/>
        </div>
    )
}
export default User