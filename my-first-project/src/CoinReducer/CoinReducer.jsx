import React from 'react'
import '../CoinReducer/CoinReducer.css'
import { useReducer } from 'react'


const intialState={coin:50}

function reducer(state,action){
  switch (action.type){
    case 'COLLECT_COIN':
      // console.log("Action type in collect coin reducer",action.type)
      // console.log("state in reducer",state)
      // console.log("initialstate",intialState)
      return {coin:state.coin+5}
      case 'LOOSE_COIN':
        return {coin:state.coin-2}
        case 'RESET':
          return {coin:intialState.coin}
      default:
        return state
  }

}


const CoinRedeucer = () => {
    const [state,dispatch]=useReducer(reducer,intialState)
  return (
   <>
   <div className='container'>
   <h1>Coin Collector Game</h1>
   <h3>Coin:{state.coin}</h3>
   <button onClick={()=>dispatch({type:'COLLECT_COIN'})}>Collect Coin</button>
   <button onClick={()=>dispatch({type:'LOOSE_COIN'})}>Loss Coin</button>
 <button onClick={()=>dispatch({type:'RESET'})}>RESET</button>
  </div>
   </>
  )
}

export default CoinRedeucer