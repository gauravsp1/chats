import React, { useState } from "react";
import { UserActions } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./Profile.css";
import ProfileImage from "../../images/first.jpg";
import EditIcon from "../../images/E2.png";

function Profile() {
  const user = useSelector((state) => state?.user?.userData) || [];

  const [data, setData] = useState({
    handler: user.handler,
    bio: user.bio,
    location: user.location,
  });
  const history = useHistory();
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(UserActions.logoutUser(history));
  }

  function handleImageChange(event) {
    const image = event.target.files[0];
    console.log("image", image);
  }

  function handleEditPicture() {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  }
  function openDialog() {
    let dialog = document.getElementById("myDialog");
    dialog.showModal();
  }

  function closeDialog() {
    let dialog = document.getElementById("myDialog");
    clearState();
    dialog.close();
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((Previous) => {
      return { ...Previous, [name]: value };
    });
  };
  const handleSave = () => {
    dispatch(UserActions.setUserData(data));

    closeDialog();
  };
  const clearState = () => {
    setData({
      handler: data.handler,
      bio: data.bio,
      location: data.location,
    });
  };
  return (
    <div className="profile-container">
      <img className="profile-image" src={ProfileImage} alt="Profile-Img" />
      {/* <input
        type="file"
        id="imageInput"
        hidden="hidden"
        onChange={handleImageChange}
      /> */}
      {/* <img
        className="profile-image-edit"
        onClick={handleEditPicture}
        src={EditIcon}
        alt="Edit-Icon"
        title="Change Profile Photo"
      /> */}

      <img
        className="profile-details-edit"
        src={EditIcon}
        onClick={openDialog}
        alt="Edit-Icon"
        title="Edit Description"
      />
      <div className="description">
        <span>
          <b>Handle:-</b> {user.handler}
        </span>
        <span>
          <b>Bio:-</b> {user.bio.substring(0, 60)}
        </span>
        <span>
          <b>Location:-</b> {user.location}
        </span>
        <span>
          <b>Joined On:-</b>1/10/2022
        </span>
      </div>
      <dialog id="myDialog">
        <h2>Edit Info</h2>
        <div className="edit-input-container">
          <input
            type="text"
            name="handler"
            className="edit-input-feild"
            onChange={(e) => handleChange(e)}
            value={data.handler}
            placeholder="Handler Name"
          />
          <input
            type="text"
            name="location"
            className="edit-input-feild"
            onChange={(e) => handleChange(e)}
            value={data.location}
            placeholder="Location"
          />
          <textarea
            name="bio"
            className="edit-input-text-feild"
            onChange={(e) => handleChange(e)}
            value={data.bio}
            rows="8"
            placeholder="Bio..."
          />
        </div>
        <div className="footer">
          <button className="butn-close" onClick={closeDialog}>
            Close
          </button>
          <button className="butn-save" onClick={handleSave}>
            Save
          </button>
        </div>
      </dialog>
    </div>
  );
}

export default Profile;
