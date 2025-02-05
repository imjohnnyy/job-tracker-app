import { useEffect, useRef } from "react";
import LogOutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "../redux/authenticationSlice";

const AccountModal = ({ setIsAccountIconClicked }) => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userSlice.userData);
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
      className="absolute p-4 bg-white border rounded-lg shadow-lg top-16 right-8 md:top-10"
    >
      {/* Close Button */}
      <button
        onClick={() => setIsAccountIconClicked(false)}
        className="absolute text-gray-500 top-2 right-2"
      ></button>

      <p className="mb-4 text-xl font-bold">{userDetails.firstName} {userDetails.lastName}</p>
      {/* Log Out Button */}
      <button className="flex items-center justify-start w-full py-2 text-lg font-semibold text-black rounded-lg hover:bg-slate-100" onClick={handleLogOut}>
        <LogOutIcon className="my-1 ml-[9px] mr-[5px]" style={{ fontSize: "160%" }} />{" "}Sign out
      </button>
    </div>
  );
};

export default AccountModal;
