import React, { useState } from "react";
import { UserActions } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./Profile.css";
import ProfileImage from "../../images/first.jpg";
import EditIcon from "../../images/E2.png";

function Profile() {
  const [data, setData] = useState({
    handler: "",
    bio: "",
    location: "",
    date: null,
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state) => state?.user) || [];

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
    dialog.close();
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((Previous) => {
      return { ...Previous, [name]: value };
    });
  };
  return (
    <div className="profile-container">
      <img className="profile-image" src={ProfileImage} alt="Profile-Img" />
      <input
        type="file"
        id="imageInput"
        hidden="hidden"
        onChange={handleImageChange}
      />
      <img
        className="profile-image-edit"
        onClick={handleEditPicture}
        src={EditIcon}
        alt="Edit-Icon"
        title="Change Profile Photo"
      />

      <img
        className="profile-details-edit"
        src={EditIcon}
        onClick={openDialog}
        alt="Edit-Icon"
        title="Edit Description"
      />
      <span>
        <b>Handle:-</b> Gaurav
      </span>
      <span>
        <b>Bio:-</b> Coder, Artist and much more...
      </span>
      <span>
        <b>Location:-</b> Bangalore
      </span>
      <span>
        <b>Joined On:-</b>1/10/2022
      </span>
      <dialog id="myDialog">
        <h2>Edit Info</h2>
        <div className="main-container">
          <div className="input-container">
            <input
              type="text"
              name="handler"
              className="input-feild"
              onChange={(e) => handleChange(e)}
              value={data.handler}
              placeholder="Handler Name"
            />
            <input
              type="text"
              name="bio"
              className="input-feild"
              onChange={(e) => handleChange(e)}
              value={data.bio}
              placeholder="Bio..."
            />
            <input
              type="text"
              name="location"
              className="input-feild"
              onChange={(e) => handleChange(e)}
              value={data.location}
              placeholder="Location"
            />
          </div>
          <div className="footer">
            <button className="butn-close" onClick={closeDialog}>
              Close
            </button>
            <button className="butn-save" onClick={closeDialog}>
              Save
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Profile;
