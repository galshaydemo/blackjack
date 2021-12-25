import {IconContext} from "react-icons";
import './Style/App.css';
import Card from './Card'
import React,{useState} from 'react';
import PlayerRow from "./PlayerRow";
import Buttons from "./Buttons";
import FinishGame from './FinishGame'
const cards=["2","3","4","5","6","7","8","9","10","jack","queen","king","ace"]
const types=["spade","diamond","heart","club"]

function App() {
const [finishGameModal,setfinishGameModal]=useState(false)
const [quitPlayer,setQuitPlayer]=useState(false)
const [quitDealer,setQuitDealer]=useState(false)
const [playerCard,setPlayerCard]=useState([]);
const [DealerCard,setDealerCard]=useState([]);
const [active,setActive]=useState(false)
const [playerTotal,setPlayerTotal]=useState(0)
const [DealerTotal,setDealerTotal]=useState(0)
const [whoPlay,setwhoPlay]=useState(true)
const [winner,setWinner]=useState(0)
  React.useEffect(() => {
  
},[])  
  function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const addCard=()=>
{
  AddPlayerCard(whoPlay);
  setwhoPlay(!whoPlay)
}
  const valueCard=(id)=>
  {
    
      switch ( id )
      {
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '10':return id*1;
        case 'king':
        case 'queen':
        case 'jack':return 10;
        case 'ace':return 1;
        default:return 0;
      }
      
      
  }
  const AddPlayerCards = async (pl)=>
  {
    const type=types[getRandomInt(4)]
    const id=cards[getRandomInt(13)]
    const type1=types[getRandomInt(4)]
    const id1=cards[getRandomInt(13)]
    if ( pl  )
    {
      
      setPlayerTotal(valueCard(id) + valueCard(id1))
      setPlayerCard([{id: id, type: type},{id:id1,type:type1}])
    }
     else
     {
     setDealerTotal(valueCard(id) + valueCard(id1))
     setDealerCard([{id: id, type: type},{id:id1,type:type1}])
     }
  }
  const AddPlayerCard = async (pl)=>
  {
    if ( !active) return;
    
    const type=types[getRandomInt(4)]
    const id=cards[getRandomInt(13)]
    var total=pl ? playerTotal : DealerTotal;
    total+=valueCard(id);
    if ( pl  )
      {
        setPlayerTotal(total)
        setPlayerCard(playerCard.concat({id: id, type: type}))
      }
      else
      {
        setDealerTotal(total)
        setDealerCard(DealerCard.concat({id:id,type:type}))

      }
    
    if ( total === 21 )    
    {
      setWinner(pl)
      setActive(false)
      setfinishGameModal(true)
    }
    if ( total > 21)
    {
      setWinner(!pl)
      setActive(false)
      setfinishGameModal(true)
    }
  
  }
  const StartGame= async ()=>
  {
    setActive(true);
    setwhoPlay(true);
    setDealerTotal(0);
    setPlayerTotal(0);
    AddPlayerCards(true)
    AddPlayerCards(false)
    
      
  }
  const OneColor=({type})=>
  {
    return(
    
    cards.map((element)=>
        {
          const pc=playerCard.filter((card)=> card.id === element && card.type === type)
          const hc=DealerCard.filter((card)=> card.id === element && card.type === type)
          return <Card key={type+element} flip={pc.length > 0 || hc.length> 0} type={type} id={element}></Card>
         
        })
     )

  }
  const stopOneGame=()=>
  {
    

    if ( whoPlay) 
    {
      if ( quitDealer )
      {
        setActive(false)
        if ( quitPlayer)
        {
          setWinner(playerTotal > DealerTotal) 
          setfinishGameModal(true)
        }
      }
      setQuitPlayer(true)
    }
    if ( !whoPlay) 
    {
      if ( quitPlayer )
      {
          setActive(false)
          setWinner(playerTotal > DealerTotal) 
          setfinishGameModal(true)

      }
      setQuitDealer(true)
    }
    setwhoPlay(!whoPlay);
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <div style={{height:'40px',marginBottom:'10px'}}>Black Jack</div>
        </header>
        <FinishGame isOpen={finishGameModal} handleClose={()=>setfinishGameModal(false)}>
          <div>
            {winner ? 'Player Win' : 'Delear Win'}
          </div>
        </FinishGame>



        
        <IconContext.Provider value={{size: 56,color:"#A3A3A3"}}>
        <div className="App-Content">
        {types.map((element)=>
        {
          return <div key={element}><OneColor key={element} type={element}></OneColor></div>
        })}
        <PlayerRow key="Player" name={"Player"} data={playerCard} active={active} winner={winner}></PlayerRow>
        <PlayerRow key="Dealer" notshow={0} name={"Dealer"} data={DealerCard} active={active} winner={!winner}></PlayerRow>
        <Buttons  start={StartGame} addCard={addCard} stop={stopOneGame} 
                  whoPlay={whoPlay} active={active}>

        </Buttons>
        </div>
        </IconContext.Provider>
        
        
      
    </div>
  );
}

export default App;
