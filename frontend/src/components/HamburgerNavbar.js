// Navigation option for smaller devices (Hamburger menu navbar) 
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from 'react-router-dom';

const HamburgerNav = () => {
    const [isExpandNavbar, setIsExpandNavbar] = useState(false);

    // Navbar toggle function
    const handleNav = () => {
      setIsExpandNavbar(!isExpandNavbar);
    };
  
      // Navigation using React Router
      const navigate = useNavigate();

  return (
    <div className="block px-4 py-3 md:hidden" onClick={handleNav}>
    <MenuIcon style={{ fontSize: 35 }} />
    <ul
      className={
        isExpandNavbar
          ? "fixed left-0 top-0 w-[100%] h-full bg-white ease-in-out duration-500 flex flex-col items-center justify-center text-2xl text-gray font-semibold"
          : "ease-in-out duration-500 fixed left-[-100%]"
      }
    >
      <div className={"flex ml-auto mr-12 mb-20 mt-[-120px]"}>
        <CloseIcon style={{ fontSize: 35 }} />
      </div>
      <li className={"py-5"}>
        <h1 onClick={() => navigate('/')} className={"hover:text-sky-500"}>
          Dashboard
        </h1>
      </li>
      <li className={"py-5"}>
        <h1 href="#add-applications" onClick={() => navigate('/add-applications')} className={"hover:text-sky-500"}>
          Add Jobs
        </h1>
      </li>
    </ul>
  </div>
  )
}
export default HamburgerNav