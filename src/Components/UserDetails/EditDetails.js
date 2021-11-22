import React, { useState } from 'react'
import { connect } from "react-redux"
import { DataActions, UserActions } from "../../Redux/Actions"
import { useDispatch, useSelector } from "react-redux";
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

// Icons
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles({})


function EditDetails() {
    const classes = useStyles();

    const [state, setState] = useState({
        bio: "",
        location: "",
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
    function handleSubmit(){
        // props.editUserDetails(state);
        console.log(state);
        handleClose();
    }

    return (
        <>
            <Tooltip title="Edit Bio" placement="top">
                <IconButton onClick={handleOpen} className="button">
                    <EditIcon color="primary" />
                </IconButton>
            </Tooltip>
            <Dialog
                open={state.open}
                onClose={handleClose}
                fullWidth
                maxWidth="xs"
            >
                <DialogTitle>Edit your details</DialogTitle>
                <DialogContent>
                    <form>
                        <TextField
                            name="bio"
                            tpye="text"
                            label="Bio"
                            multiline                            
                            placeholder="A short bio about yourself..."
                            className={classes.textField}
                            value={state.bio}
                            onChange={handleChange}
                            fullWidth
                        />
                        <TextField
                            name="location"
                            tpye="text"
                            label="Location"
                            placeholder="Where you live..."
                            className={classes.textField}
                            value={state.location}
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
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

// function mapStateToProps(state) {
//     return {
//         user: state.user
//     }
// }
// function mapDispatchToProps(dispatch) {
//     return {
//         editUserDetails: ((body) => { dispatch(editUserDetails(body)) })
//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(EditDetails);


export default EditDetails;