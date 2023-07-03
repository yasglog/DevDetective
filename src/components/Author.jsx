import React, { useContext, useEffect, useState } from 'react'
import {MdLocationOn} from 'react-icons/md'
import {AiOutlineLink} from 'react-icons/ai'
import Card from './Card'
import { AppContext } from '../context/AppContext'


const Author = () => {

  const url = "https://api.github.com/users/";
  const {author, setAuthor} = useContext(AppContext)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)


  async function fetchdata() {
    setLoading(true);
    try {

      const respond = await fetch(url + author);
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
  }, [])
  return (
    <div>
      <Card data={data} loading={loading} setLoading={setLoading}></Card>
    </div>
  )
}

export default Author
