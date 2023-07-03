import { Route, Router,Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Author from "./components/Author";
import User from "./components/User";
import Search from "./components/Search";
import Mainsection from "./Mainsection";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

function App() {

  const {theme,setTheme}=useContext(AppContext)
  return (
   <div className={`${theme!=="white"?('bg-black min-h-[750px] overflow-y-hidden'):('bg-[rgb(245,248,255);] h-[750px] overflow-hidden')}`}>
    <Navbar></Navbar>
    <Search></Search>
    {/* <Routes>
      <Route path="/" element={<Author></Author>}></Route>
    </Routes> */}
    <Mainsection></Mainsection>
   </div>
  );
}
export default App;
