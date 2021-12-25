import React from 'react'
import './Style/Buttons.css';
import { GiCardPickup,GiCardRandom} from "react-icons/gi"
import { RiStopCircleFill} from "react-icons/ri"

const Buttons=({start,addCard,active,whoPlay,stop})=>
{
	return(
          <div className="row">
          <button className="button" 
          onClick={()=>{start()}}>
            <GiCardRandom color="green" />
            <div>Start</div>
            </button>

          {active && 
                <button className="button" 
                onClick={addCard}>
                  <GiCardPickup color="blue"/>
                  <div>{whoPlay ?'Player':'Dealer'}</div>
                
                </button>}
                {active &&
                <button className="button" 
          onClick={stop}>
            <RiStopCircleFill color="red"/>
            <div>Finish</div>
            </button>
              }
              </div>)
}
export default Buttons;