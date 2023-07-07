import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import './tipcal.css'
import logo from '../../images/SPLITTER.svg'
import shape from '../../images/CombinedShape.svg'
import dollar from '../../images/$.svg'
import Button from '../button/Button'
const Tipcal = () => {

  const[tip, setTip] = useState(0)
  const [total, setTotal] = useState(0)
  const [custom, setCustom] = useState("")
  const [value, setValue] = useState("") 
  const [bill, setBill] = useState("")
  const [persons, setPersons] = useState("")
  console.log(custom,bill,persons);
 

  const handleClick = (e) =>{
            e.preventDefault();
            const val = e.target.value;
           setValue(val);
          console.log(value)
  }
  const handleReset = (e) =>{
           setPersons("");
           setValue("");
          setBill("");
          setTip(0);
          setTotal(0);
  }
  useEffect(() => {
      if(value){
        let tipValue = (+bill / +persons) * +value;
        setTip(tipValue);
        let totalValue = (+bill + (tipValue * +persons)) / +persons;
        setTotal(totalValue);
      }else if(custom){
        let tipCustom = (+bill / +persons) * (+custom / 100 );
        setTip(tipCustom);
        let totalValue = (+bill + (tipCustom * +persons)) / +persons;
        setTotal(totalValue);
      }
  }, [bill,custom,persons,value])
 
  return (
    <div className='tipcal'> 
      <div>
        <div className='logo'><img src={logo} alt="logo" /></div>
        <Card className="main-card">
                <div className='box'>
                  <div className='billInput'>
                    <label htmlFor="bill" className='bill'>Bill</label>
                    <input type="number" value={bill} onChange={(e)=>{setBill(e.target.value)}} required className='input0' placeholder='0'/>
                    <img src={dollar} alt="dollar" className='dollar' />
                  </div>
                  <div className='select'>  
                      <p className='tip'>Select Tip %</p>
                      <div className='tip-btn'>
                        <Button className='btn' value={5/100} label={5} handleClick={handleClick}/>
                        <Button className='btn' value={10/100} label={10} handleClick={handleClick}/>
                        <Button className='btn' value={15/100} label={15} handleClick={handleClick}/>
                        <Button className='btn' value={25/100} label={25} handleClick={handleClick}/>
                        <Button className='btn' value={50/100} label={50} handleClick={handleClick}/>
                        <input type="number" value={custom} className='custom' required onChange={(e)=>{setCustom(e.target.value)}} placeholder='Custom'/>
                       
                      </div>
                  </div>
                  <div className="billInput">
                    <label htmlFor="Number of People" className='bill'><span>Number of People</span> <span className={(+persons >= 1 || persons === "") ? "person1" : "person0"}>Can’t be zero</span></label>
                    
                    <input type="number"  value={persons} onChange={(e)=>{setPersons(e.target.value)}} required className={(+persons >= 1 || persons === "")  ? "input0" : "input1" } placeholder='0'/>
                    <img src={shape} alt="icon" className='shape'/>
                  </div>
                </div>
                <Card className='mini-card'>
                    <div className="result result1">
                      <div className='amt'>Tip Amount<span>/ person</span> </div>
                      <div className='total'>${tip.toFixed(2)}</div>
                    </div>
                    <div className="result result2">
                    <div className='amt'>Total<span>/ person</span> </div>
                    <div className='total'>${total.toFixed(2)}</div>
                    </div>
                    <div className="resetBtn">
                      <button className='reset' onClick={handleReset}>RESET</button>
                    </div>
                </Card>
        </Card>
      </div>
    </div>
  )
}

export default Tipcal