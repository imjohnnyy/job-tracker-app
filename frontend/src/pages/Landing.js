import { useState } from 'react'
import Logo from "../assets/images/logo.svg";
import Worker from "../assets/images/landing.svg";
import { useSpring, animated } from "react-spring";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';


// Utilized the React Spring library to animate the 'facts' numbers
const AnimateNumber = ({ n }) => {
  const {number} = useSpring({
  from: {number: 0},
  number: n,
  delay: 350,
  config: {mass: 1, tension: 30, friction: 14}});
  return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>
}

const Landing = () => {

  const [isExpandNavbar, setIsExpandNavbar] = useState(false);
  
  // Navbar toggle function
  const handleNav = () => {
    setIsExpandNavbar(!isExpandNavbar);
  }

  // Navigate to login and register page using React Router
  const navigate = useNavigate();
  const handleClickLogin = () => navigate('/login');
  const handleClickRegister = () => navigate('/register');

  return (
    <div className={"bg-lightergray"} id="home">
      {/* HEADER */}
      <header className="flex items-center justify-between w-4/5 p-6 mx-auto max-lg:w-[95%]">
        {/* LOGO */}
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Logo" className="w-[175px] h-[60px] static" />
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-10 max-md:hidden">
            <li>
              <a href="#home" className="text-lg font-medium text-gray hover:text-sky-500"> Home </a>
            </li>
            <li>
              <a href="#about" className="text-lg font-medium text-gray hover:text-sky-500"> About </a>
            </li>
            <li>
              <a href="#contact" className="text-lg font-medium text-gray hover:text-sky-500"> Contact </a>
            </li>
          </ul>
        </nav>

        {/*  Navigation option for smaller devices (Hamburger menu navbar) */}
        <div className="block px-4 py-3 mx-2 md:hidden max-lg:mx-0 max-lg:px-0 max-md:ml-[50%]" onClick={handleNav}>
          <MenuIcon style={{fontSize: 35}} />
          <ul className={isExpandNavbar ? 'fixed left-0 top-0 w-[100%] h-full bg-white ease-in-out duration-500 flex flex-col items-center justify-center text-2xl text-gray font-semibold' : 'ease-in-out duration-500 fixed left-[-100%]'}>
            <div className={"flex ml-auto mr-12 mb-20 mt-[-120px]"}><CloseIcon style={{fontSize: 35}} /></div>
            <li className={"py-5"}><a href="home" className={"hover:text-sky-500"}>Home</a></li>
            <li className={"py-5"}><a href="#about" className={"hover:text-sky-500"}>About</a></li>
            <li className={"py-5"}><a href="#contact" className={"hover:text-sky-500"}>Contact</a></li>
          </ul>
        </div>

        {/* Login Button */}
        <div>
            <a href="#login" className="px-4 py-1 text-lg font-medium text-white rounded-full bg-gray hover:bg-blue-700 max-md:hidden" onClick={handleClickLogin}> Login</a>
        </div>

      </header>

      {/* Body */}
      <body className="flex items-center justify-between w-4/5 p-12 pb-2 mx-auto mt-5 max-lg:flex-col">
        <div className="ml-[10%] mt-[-100px] max-lg:ml-[-10%]">
          <h1 className={"w-auto items-start text-5xl text-left font-bold text-gray mr-12 max-lg:text-4xl max-md:flex max-lg:text-center max-lg:w-[110%] max-lg:mt-[5rem]"}>Job Application Tracking Made Easy</h1>
          <p className={"w-auto text-gray text-left text-lg font-semibold mt-10 mr-12 max-md:flex max-lg:text-center max-lg:w-[110%]"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe molestiae tempore
            suscipit officia ab omnis soluta obcaecati nobis aliquid ullam
            eos repudiandae quis natus vel, nostrum odio alias.</p>
          <button class="relative bg-gray hover:bg-blue-700 text-white font-bold text-lg py-3 px-5 rounded-full mt-5 mr-16 max-lg:mr-0 max-lg:ml-8" onClick={handleClickRegister}> Get Started </button>
        </div>

        {/* Worker Image */}
        <div className={"flex items-center justify-center mt-[-100px]"}>
          <img className={"mr-[10%] w-[2050px] h-[650px] static max-lg:w-[25rem] max-lg:h-[25rem] max-lg:ml-8 max-lg:mt-[3.5rem]"} src={Worker} alt="worker"></img>
        </div>
      </body>
    
      {/* Footer */}
      {/* Facts Section */}
      <footer className="h-[15rem] bg-lightergray max-lg:h-[22rem] max-lg:static inset-x-0 bottom-0">
        <div className="container px-4 mx-auto">
          <h2 className="mb-4 text-3xl font-bold">Helping Job Seekers Is Our Mission</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 bg-white rounded-md shadow-md">
              <h3 className="mb-2 text-lg font-semibold">Applications Tracked</h3>
              <p className="text-2xl font-bold"><AnimateNumber n={12000} /><span>+</span></p>
            </div>
            <div className="p-4 bg-white rounded-md shadow-md">
              <h3 className="mb-2 text-lg font-semibold">Weekly Users</h3>
              <p className="text-2xl font-bold"><AnimateNumber n={1500} /><span>+</span></p>
            </div>
          </div>
        </div>
        
      </footer>
    </div>
  );
};

export default Landing;
