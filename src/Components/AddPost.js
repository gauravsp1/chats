import React,{useState} from 'react'
import { connect } from "react-redux"
import { addContent } from "../Redux/Actions/DataAction"


import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
    
    Dialogss:{
        height:"50px",
        minwidth:"500px",
    },
  Progress:{
        height:"5px",
        position:"absolute"
  },
  Button:{
    margin: '5px',
    position:"relative"
  }
});

function AddPost(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [addPost, setAddPost] = useState({
        body:""
    });


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setAddPost({
        body:""
    })
  };

  const handleAddPost = () => {
    props.addContent(addPost)
    console.log(addPost);
    setAddPost({
        body:""
    })
    setOpen(false);
  };

  function handleChange(e){
    const {name,value} = e.target
    setAddPost((prev)=>{
      return { ...prev,
        [name]: value
    }})
}


    return (
        <div>

            <div>
                <Button  onClick={handleOpen} variant="contained" color="primary" disabled={props.loading}>Add a Post
                {props.loading ? <CircularProgress className={classes.Progress}/>:null}
                </Button>
                <Dialog  fullWidth open={open} onClose={handleClose}  aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">New Post</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Share what's on your Mind!!!
                        </DialogContentText>
                       
                         
                        <TextField
                            autoFocus
                            margin="dense"
                            id="text"
                            label="Post..."
                            onChange={(e)=>{handleChange(e)}}
                            name="body"
                            value={addPost.body}
                            type="text"
                            multiline
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleAddPost}  color="primary">
                            Post
                            
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>




        </div>
    )
}



function  mapStateToProps(state) {
    return {
        posts: state.data.posts,
        loading:state.UI.loading
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        addContent:((body)=>{dispatch(addContent(body))})

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AddPost); 
