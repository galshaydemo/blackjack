import React from 'react';
import Card from './Card';
import './Style/PlayerRow.css';
const PlayerRow=({notshow,name,data,winner,active})=>
{
	return(
	<div className="row">
            <div className="name" style={{color:active || (data.length === 0 )? '' : winner  ? 'green': 'red'}}>{name}</div>
            <div className="cards">
            {data && data.map((element,index)=>
            {
              return <div key={element.id+element.type} className="divplayercard"><Card notshow={index === notshow} flip={false}  key={element.id+element.type} id={element.id} type={element.type}></Card></div>
            })}
            </div>
            
              
        </div>);

}
export default PlayerRow;