import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import Card from './Card';

const User = () => {
  // const {author, setAuthor} = useContext(AppContext)

  const url = "https://api.github.com/users/";
  const{searchval}=useContext(AppContext)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const {searchtrue,setSearchtrue}=useContext(AppContext);



  async function fetchdata() {
    setLoading(true);
    try {

      const respond = await fetch(url + searchval);
      console.log(searchval);
      const result = await respond.json();
      setData(result)
      console.log(data)
    }
    catch (error) {
      console.log("something went wrong")
    }

    setLoading(false);
  }

  useEffect(() => {
    console.log("hello ji")
    fetchdata();
  }, [searchtrue])
  return (
    <div>

      {
         loading?(<div> Inner data is loading</div>):(<Card data={data} loading={loading} setLoading={setLoading}></Card>
         )
      }
      
    </div>
  )
}

export default User
