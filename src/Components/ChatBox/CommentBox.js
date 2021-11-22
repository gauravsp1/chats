import React, { useState } from 'react'
import ViewComment from "./ViewComment"
import AddComment from "./AddComment"

// Material UI 
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import ChatIcon from '@material-ui/icons/Chat';

const useStyles = makeStyles({

})


function CommentBox() {
    const classes = useStyles();

    const [state, setState] = useState({
        open: false
    })
    function handleOpen() {
        setState({ open: true });
    };

    function handleClose() {
        setState({ open: false });
    };

    return (
        <>
            <Tooltip title="Show Comments" placement="top">
                <IconButton onClick={handleOpen} className="button">
                <ChatIcon color="primary" />
                </IconButton>
            </Tooltip>
            <span className="Comment"> 10 Comments</span>
            <Dialog
                open={state.open}
                onClose={handleClose}
                fullWidth
                maxWidth="xs"
            >
                <DialogTitle>Comments</DialogTitle>
                <DialogContent>
                    <ViewComment/>
                    <AddComment/>
                </DialogContent>
                {/* <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Save
                    </Button>
                </DialogActions> */}
            </Dialog>
        </>
    )
}

export default CommentBox
