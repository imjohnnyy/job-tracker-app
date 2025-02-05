import { useEffect, useRef } from "react";
import LogOutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../redux/authenticationSlice";

const AccountModal = ({ setIsAccountIconClicked }) => {
  const dispatch = useDispatch();
  const modalRef = useRef(null);

  const handleLogOut = () => {
    dispatch(userLoggedOut());
    console.log("User has logged out");
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
      className="absolute p-4 bg-white border rounded-lg shadow-lg top-16 right-4"
    >
      {/* Close Button */}
      <button
        onClick={() => setIsAccountIconClicked(false)}
        className="absolute text-gray-500 top-2 right-2"
      >
      </button>

      <p className="mb-4 text-2xl font-bold">Account Options</p>
      <button
        onClick={handleLogOut}
        className="flex items-center px-4 py-2 text-white bg-red-500 rounded-md"
      >
        <LogOutIcon className="mr-2" /> Log Out
      </button>
    </div>
  );
};

export default AccountModal;
