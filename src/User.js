import React from 'react'
import Notification from './Notifications'
import EditUserForm from './EditUserForm'
import Trades from './Trades'

function User() {
    return(
        <div>
        <h1> I'm the user component!</h1>
        <Notification/>
        <EditUserForm/>
        <Trades/>
        </div>
    )
}
export default User