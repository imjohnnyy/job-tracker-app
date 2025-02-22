import { useState, useEffect, useRef } from "react";
import LogOutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "../redux/authenticationSlice";

const AccountModal = ({ setIsAccountIconClicked }) => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.authenticationSlice);
  const modalRef = useRef(null);
  const [sessionStorageProfile, setSessionStorageProfile] = useState({});
  const [sessionStorageUser, setSessionStorageUser] = useState({});

  useEffect(() => {
    if (userDetails.username && userDetails.email) {
      sessionStorage.setItem("userInfo", JSON.stringify({ username: userDetails.username, email: userDetails.email }));
    }
  }, [userDetails]);

  useEffect(()=> {  
    const profileData = sessionStorage.getItem("profileData");
    if (profileData) {
      setSessionStorageProfile(JSON.parse(profileData));
    } 
      const userInfo = sessionStorage.getItem("userInfo");
      setSessionStorageUser(JSON.parse(userInfo));
    
  }, [userDetails])

  const handleLogOut = () => {
    dispatch(userLoggedOut());
    sessionStorage.removeItem("userInfo");
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsAccountIconClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsAccountIconClicked]);

  return (
    <div
      ref={modalRef}
      className="absolute w-64 p-5 bg-white border shadow-xl rounded-2xl top-16 right-8 md:top-10"
    >
      {/* Close Button */}
      <button
        onClick={() => setIsAccountIconClicked(false)}
        className="absolute text-gray-400 hover:text-gray-600 top-2 right-2"
      >
        <CloseIcon fontSize="small" />
      </button>

      {/* User Details */}
      <div className="mb-4 text-center">
        <p className="text-lg font-semibold text-gray-900">{sessionStorageUser.username}</p>
        <p className="text-sm text-gray-600">{sessionStorageUser.email || sessionStorageProfile.email}</p>
      </div>

      {/* Log Out Button */}
      <button 
        className="flex items-center justify-center w-full py-2 text-lg font-semibold text-white transition bg-red-500 rounded-xl hover:bg-red-600"
        onClick={handleLogOut}
      >
        <LogOutIcon className="mr-2" fontSize="medium" /> Sign out
      </button>
    </div>
  );
};

export default AccountModal;
