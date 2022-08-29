import React from 'react'
import "../style-sheets/Counter.css"

function Counter(props){
    return (
      <div className='counter'>
        {props.numClicks}
      </div>  
    )
}

export default Counter;