import React, { useState } from 'react'
import { connect } from "react-redux"
import { DataActions, UserActions } from "../../Redux/Actions"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router'
import { dayjs } from 'dayjs'
import EditDetails from "./EditDetails"

//Material UI
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';


// Icons
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';
import EditIcon from '@material-ui/icons/Edit';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';

const useStyles = makeStyles({
    profile: {
        '& .image-wrapper': {
            textAlign: 'center',
            position: 'relative',
            '& button': {
                position: 'absolute',
                top: '80%',
                left: '70%'
            }
        },
        '& .profile-image': {
            width: 200,
            height: 200,
            objectFit: 'cover',
            maxWidth: '100%',
            borderRadius: '50%',
            margin: '10px',

        },
        '& .profile-details': {
            textAlign: 'center',
            '& span, svg': {
                verticalAlign: 'middle'
            },
            '& a': {
                color: '#00bcd4'
            }
        },
        '& hr': {
            border: 'none',
            margin: '0 0 10px 0'
        },
        '& svg.button': {
            '&:hover': {
                cursor: 'pointer'
            }
        }
    }

})


function Profile(props) {
    const classes = useStyles();
    const history = useHistory()
    const dispatch = useDispatch();

    const user =
    useSelector((state) => state?.user) || [];

    function handleLogout() {
        dispatch(UserActions.logoutUser(history))
    }


  function handleImageChange(event){
        const image = event.target.files[0];
        const formData = new FormData();
        formData.append('image', image, image.name);
        // props.uploadImage(formData);
      };

      function handleEditPicture(){
        const fileInput = document.getElementById('imageInput');
        fileInput.click();
      };
    return (
        <div>
            <Paper className={classes.paper}>
                <div className={classes.profile}>
                    <div className="image-wrapper">
                        <img src="./images/second.jpeg" alt="profile" className="profile-image" />
                        <input
                type="file"
                id="imageInput"
                hidden="hidden"
                onChange={handleImageChange}
              />
                        <Tooltip title="Edit profile picture" placement="top">
                            <IconButton  onClick={handleEditPicture} className="button">
                                <EditIcon color="primary" />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <hr />
                    <div className="profile-details">
                        {/* <MuiLink
                component={Link}
                to={`/users/${handle}`}
                color="primary"
                variant="h5"
              >
                @{handle}
              </MuiLink> */}
                        { <Typography variant="body2"><b>Handle:-</b>{user?.credentials?.handle ?? "NA"}</Typography>}
                        <hr />
                        {  <Typography variant="body2"><b>Bio:-</b>{user?.credentials?.bio ?? "NA"}</Typography>}
                        <hr />
                        { (
                            <>
                                <LocationOn color="primary" /> <span><b>Location:-</b>{user?.credentials?.location ?? "NA"}</span>
                                <hr />
                            </>
                        )}

                        <CalendarToday color="primary" />{' '}
                        <span><b>Joined </b>{user?.credentials?.createdAt ?? "NA"}</span>

                    </div>
                    <EditDetails/>
                    
                </div>
            </Paper>
        </div>
    )
}

// function mapStateToProps(state) {
//     return {
//         user: state.user
//     }
// }
// function mapDispatchToProps(dispatch) {
//     return {
//         logoutUser: ((history) => { dispatch(logoutUser(history)) })
//     }
// }


export default Profile;