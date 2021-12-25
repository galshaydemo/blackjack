import React from 'react';
const Card=({flip,type,id,notshow})=>
{
 	if ( flip || notshow ) return <img src={process.env.PUBLIC_URL + '/images/cover.png'} alt={type + id} />
  return <img src={process.env.PUBLIC_URL + '/images/' + type + id +'.png'} alt={type + id} />

	
}
export default Card
