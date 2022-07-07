import React from 'react';
import './Postcard.css'

const Postcard = ({data}) => {
  const{id,title,description}=data
  return ( 
    <div className="postCard">
    <h3 className="id"><span>ID: </span>{id}</h3>
    <h3 className='title'>{title}</h3>
    <p>{description}</p>
    </div>
   );
}
 
export default Postcard;