import React from "react";
import Headerhome from "../components/Headerhome";
import Postcard from "../components/Postcard";
import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"

const Home = ({data}) => {
  const navigate=useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('yoursToken');
    fetch('/verify', {
    headers: {
    'Authorization': `Bearer ${token}`
    }
    })
    .then(res => res.json())
    .then(res => {
    if (res.err) {
    localStorage.removeItem('yoursToken');
    return navigate('/');
    }
    }
    )
    }, 
    [navigate])
  return ( 
    <>
    <Headerhome/>
    <div className="allPosts">
{
  data.map((post,i)=>(<Postcard key={i} data={post}/>))
}
</div>
    </>
   );
}
 
export default Home;