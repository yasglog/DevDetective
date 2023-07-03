import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";


const Search = () => {


  
  const{searchval,setSearchval}= useContext(AppContext)
  const {searchtrue,setSearchtrue}=useContext(AppContext);

  const navigate = useNavigate();
  // useNavigate

  function useridHandler(event){

    setSearchval(event.target.value)
    // console.log(se)
  }
    function datasearchForm(event){

      
      
        console.log(event.target.value)
        setSearchtrue(searchval);
      event.preventDefault();
      navigate('/user');
      
      
    }
  return (
    // <div>
      <form  className="search-form "  onSubmit={datasearchForm} >
        <input placeholder="Enter the Github Username " name="userid" value={searchval} onChange={useridHandler}  />
        <button class="btn2 " >
          <h3 class="btn-text">Search</h3>
        </button>
      </form>
    // </div>
  );
};

export default Search;
