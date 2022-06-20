import "./App.css";
import {Route,Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login"
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {

  const {isAuth} = useContext(AuthContext);
  return <div className="App">
    < Navbar />
    <BrowserRouter>
    <Routes>
        <Route path="/" element={isAuth ? <Login/> : <Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
    </Routes> 
    </BrowserRouter>
  </div>;
}

export default App;
