import {useContext} from 'react'
import AlertContext from '../../context/alert/AlertContext'
function Alert(){
    const {alert}=useContext(AlertContext)
    return alert!==null && (
        <p className="flex items-start mb-4 space-x-2 red text-red-600"><strong>This can't be empty</strong></p>
    )
}

export default Alert