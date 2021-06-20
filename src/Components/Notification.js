import React from 'react'


//Material UI
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';


//Icons
import NotificationsIcon from '@material-ui/icons/Notifications';


const useStyles = makeStyles({

})


function Notification() {
    return (
        <>
         <Badge badgeContent={10} color="secondary">
        <NotificationsIcon className="Notification" />
        </Badge>
        </>
    )
}

export default Notification
