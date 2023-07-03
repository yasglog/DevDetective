import React from 'react'
import {MdLocationOn} from 'react-icons/md'
import {AiOutlineLink} from 'react-icons/ai'
// const [loading, setLoading] = useState(true)

const Card = ({data,loading,setLoading}) => {

  const valu=data.created_at;
  
    
const day = new Date(valu);

const m = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

let str_op = day.getDate() + ' ' + m[day.getMonth()] + ' ' + day.getFullYear();
 
// accountcreate.innerText=str_op;


  return (
    <div className='w-[700px] relative mx-auto hello '>
      {
        loading ? (
          <div>Data is loading</div>
        ) : (
          <div className=' flex flex-grow mx-auto gap-x-20 min-h-[350px] items-start relative bg-[rgb(245,248,255)] pt-5 mt-10 rounded-md'>

            {
              <img src={data.avatar_url} className='w-[130px] rounded-full ml-4'></img>
            }

            <div className='flex flex-col gap-y-2 min-w-[370px]'>

              <div className="flex flex-row justify-between ">
                <h2 className=" text-2xl font-semibold ">{data.name}</h2>
                <p className="join-date mr-2">{str_op}</p>
              </div>

              <a href={data.html_url} className="subheading">{data.login}</a>
              <p className=" text-black text-lg">{data.bio===null?(<h1>This Section has no bio</h1>):(data.bio)}</p>

              <div className="flex flex-row gap-x-10 bg-white w-[350px] h-[90px] items-center rounded-lg pl-5 mt-8">
                <div className="flex flex-col  gap-y-2">
                  <h3 className="text-xl font-semibold">Repos </h3>
                  <h3 className="text-lg font-medium">{data.public_repos}</h3>
                </div>
                <div className="flex flex-col  gap-y-2">
                  <h3 className="text-xl font-semibold">Followers </h3>
                  <h3 className="text-lg font-medium">{data.followers}</h3>
                </div>
                <div className="flex flex-col  gap-y-2">
                  <h3 className="text-xl font-semibold">Following</h3>
                  <h3 className="text-lg font-medium">{data.following}</h3>
                </div>

              </div>

              {/* basic information */}
              

                <div className="flex flex-row mt-6 gap-x-9 ">
                  <div className="flex flex-row gap-x-2 items-center justify-center">
                    <i className="text-2xl"><MdLocationOn></MdLocationOn></i>
                    <h3 className="location">{data.location===null?(<h1>No location</h1>):(data.location)}</h3>
                  </div>
                  <div className="flex flex-row gap-x-2 items-center justify-center">
                    <i className="text-2xl"><AiOutlineLink></AiOutlineLink></i>
                    <h3 className="text-xl"> {data.html_url} </h3>
                  </div>

                </div>
              
            </div>

          </div>

        )
      }
    </div>
  )
}

export default Card
