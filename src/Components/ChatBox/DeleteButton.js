import React, { useState } from 'react'
import { connect } from "react-redux"
import { DataActions, UserActions } from "../../Redux/Actions"
import { useDispatch, useSelector } from "react-redux";

//Material UI
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    deleteButton: {
        position: 'absolute',
        left: '85%',
        top: '5%'
      }
})


function DeleteButton(props) {
    const classes = useStyles();

    const [state, setState] = useState({
        open: false
    })

    function handleOpen() {
        setState({ open: true });
    };

    function handleClose() {
        setState({ open: false });
        console.log(props.user.credentials.handle,props.test.userHandle);
    };
    function deletePost() {
        props.deleteScream(props.test.postId);
        setState({ open: false });
      };

    const deleteButton =
    props.user.credentials.handle === props.test.userHandle ? (
        <>
        
          <Tooltip title="Delete Post" placement="top" className={classes.deleteButton}>
                <IconButton onClick={handleOpen} className="button">
                <DeleteOutline  color="secondary" />
                </IconButton>
            </Tooltip>
        <Dialog
        open={state.open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          Are you sure you want to delete this post ?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={deletePost} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      </>
    ) : null;


    return (
        <>
          {deleteButton}  
        </>
    )
}

// function  mapStateToProps(state,ownProps) {
//     return {
//         user: state.user,
//         UI: state.UI,
//         test:ownProps.post
//     }
// }
// function  mapDispatchToProps(dispatch) {
//     return {
//         deleteScream:(postId)=>{dispatch(deleteScream(postId))}
//     }
// }


// export default connect(mapStateToProps,mapDispatchToProps)(DeleteButton);


export default DeleteButton;
