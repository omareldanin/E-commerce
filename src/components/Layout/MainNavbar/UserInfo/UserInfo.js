import "./UserInfo.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../../../store/authSlice";
const UserInfo = () => {
  const [showInfo, setShowInfo] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();
  const Logout = () => {
    dispatch(authActions.logout());
    navigate("/login");
  };
  const toggleInfo = () => {
    setShowInfo((pre) => (pre = !pre));
  };
  return (
    <div className="userInfo">
      <img
        src={
          userData.photoUrl
            ? userData.photoUrl
            : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
        }
        alt="userImage"
        onClick={toggleInfo}
      />
      {showInfo && (
        <div className="info">
          <div className="info-overlay" onClick={toggleInfo}></div>
          <h6>{userData.name}</h6>
          <p>{userData.email}</p>
          <div className="menuItem">
            <FontAwesomeIcon icon={faUser} />
            <span>Profile</span>
          </div>
          <div className="menuItem">
            <FontAwesomeIcon icon={faGear} />
            <span>Setting</span>
          </div>
          <div className="menuItem" onClick={Logout}>
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
            <span>Logout</span>
          </div>
        </div>
      )}
    </div>
  );
};
export default UserInfo;
