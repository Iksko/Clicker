import './Clicker.scss'
import Arrow from '../images/arrow.svg'
import Xmark from '../images/xmark.svg'
import ArrowRed from '../images/arrow-red.svg'
import { useState } from 'react'

const Clicker = () => {

    const [click, addClick] = useState(0)
    const [totalClicks, countClicks] = useState(0)

    const clickHandler = () => {
        addClick(click+1)
        countClicks(totalClicks+1)
    }

    const resetHandler = () => {
        addClick(0)
    }

    return(
        <>
        <img id='arrow-red' src={ArrowRed} alt="arrow-red-icon" />
        <div className="counter">
          <h1>{click}</h1>
          <h2>Clicks</h2>
        </div>
        <div className="btns">
          <button onClick={clickHandler}>
            <p>Click</p>
            <img src={Arrow} alt="arrow-icon" />            
          </button>
          <button onClick={resetHandler}>
            <p>Reset</p>
            <img src={Xmark} alt="arrow-icon" />            
          </button>
        </div>
        <div className="total">
          <p>Total clicks</p>
          <h2>{totalClicks}</h2>
        </div>
        </>
    )
}
export default Clicker