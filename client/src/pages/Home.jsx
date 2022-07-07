import React from "react";
import Headerhome from "../components/Headerhome";
import Postcard from "../components/Postcard";
import "./Home.css"

const Home = ({data}) => {
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