import React from 'react'
import { connect } from "react-redux"
import { DataActions } from "../Redux/Actions"
import { useDispatch, useSelector } from "react-redux";

//Material UI
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';


// Icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


const useStyles = makeStyles({
  likesButton: {
        // position: 'absolute',
        right: '10%',
        // top: '5%'
      }
})

function LikeButton(props) {
  const classes = useStyles();

  function  likedPost(){
        if (
          props.user.likes &&
          props.user.likes.find(
            (like) => like.postId === props.postId
          )
        )
          return true;
        else return false;
      };

    function  likePost(){
        props.likePost(props.postId);
      };
    function  unlikePost(){
        props.unlikePost(props.postId);
      };

    const likeButton= likedPost()?(
        <Tooltip title="Undo like" placement="top" className={classes.likesButton}>
                <IconButton onClick={unlikePost} className="button">
                <FavoriteIcon color="primary" />
                <span>5 Likes</span>
                </IconButton>
            </Tooltip>
    ):( <>
        <Tooltip title="Like" placement="top" className={classes.likesButton}>
                <IconButton onClick={likePost} className="button">
                <FavoriteBorder color="primary" />
               
                </IconButton>
            </Tooltip>
             <span className="Like">5 Likes</span>
             </>
    )

    return (
        <>
            {likeButton}
        </>
    )
}

// function  mapStateToProps(state) {
//     return {
//         user: state.user,
//         UI: state.UI
//     }
// }
// function  mapDispatchToProps(dispatch) {
//     return {
//         likePost:(postId)=>{dispatch(likePost(postId))},
//         unlikePost:(postId)=>{dispatch(unlikePost(postId))}
//     }
// }


// export default connect(mapStateToProps,mapDispatchToProps)(LikeButton);


export default LikeButton;
