import React from 'react'
import LikeButton from "./LikeButton"
import DeleteButton from "./DeleteButton"
import CommentBox from "./CommentBox"

//Material UI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    card: {
      position: 'relative',
      
      display: 'flex',
      marginBottom: 20,
      width:"500px",
      // height:"150px"
    },
    image: {
      minWidth: 200
    },
    content: {
        objectFit: 'cover'
        
      },
    body:{
      width: "200px",
      overflow: 'auto',
    }
})

function DisplayBox(props) {
    const post = props.post;
    const classes = useStyles();
    return (<>
              <Card className={classes.card}>
              <CardMedia
          image="./images/second.jpeg"
          title="Profile image"
          className={classes.image}
        />
              <CardContent className={classes.content}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {post.userHandle}
        </Typography>
        {/* <Typography variant="body2" color="textSecondary">Created At:{post.createdAt._seconds}</Typography> */}
        <Typography multiline className={classes.body} variant="body1">{post.body}</Typography>
        {/* <p>{post.body}</p> */}
        {/* <h2>{post.body}</h2> */}
        <LikeButton postID={post.body}/>
        {/* <span>5 Likes</span> */}
        <CommentBox/>
        <DeleteButton post={post}/>
        </CardContent>
            </Card>
            
        </>
    )
}

export default DisplayBox
