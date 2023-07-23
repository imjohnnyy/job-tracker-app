import "./App.css";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddApplications from "./pages/AddApplications";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { userAuthenticated } from "./redux/authenticationSlice";

function App() {
  const { isLoggedIn } = useSelector(state => state.authenticationSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token !== undefined && token !== null) 
    {
      dispatch(userAuthenticated({ token }));
    }
  }, []);

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Dashboard /> : <Landing />} />
        <Route path="/register" element={isLoggedIn ? <Navigate to="/" /> : <Register/>} />
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} />
        <Route path="/add-applications" element={isLoggedIn ? <AddApplications /> : <Landing />} />
        <Route path="*" element={<h2>Page not found!</h2>} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
