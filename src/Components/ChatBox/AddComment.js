import React, { useState } from 'react'

// Material UI 
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({})


function AddComment() {
    const classes = useStyles();

    const [state, setState] = useState({
        Comment:"",
        open: false
    })
    function handleOpen() {
        setState({ open: true });
    };

    function handleClose() {
        setState({ open: false });
    };

    function handleChange(e) {
        const { name, value } = e.target
        setState((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    function handleSubmit() {
        handleClose();
    }

    return (
        <div>
            <Button onClick={handleOpen} variant="contained" color="primary">Add Comments</Button>
            <Dialog
                open={state.open}
                onClose={handleClose}
                fullWidth
                maxWidth="xs"
            >
                <DialogTitle>Add a Comment</DialogTitle>
                <DialogContent>
                    <form>
                        <TextField
                            name="Comment"
                            tpye="text"
                            label="Comment"
                            multiline
                            placeholder="Start typing..."
                            className={classes.textField}
                            value={state.Comment}
                            onChange={handleChange}
                            fullWidth
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddComment
