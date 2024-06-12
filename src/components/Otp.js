import React, { useRef, useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LENGTH=6

const Otp = () => {

    const [otp,setOtp]=useState(new Array(6).fill(''))
    const inputField=useRef([])
    const navigate=useNavigate()

    useEffect(()=>{
        if(inputField.current[0]){
            inputField.current[0].focus()
        }
    },[])

    const handleChange=(index,e)=>{
        const value=e.target.value
        if(isNaN(value)) return 
        const newOtp=[...otp]
        newOtp[index]=value.substring(value.length-1)
        setOtp(newOtp)
        if(value && index<LENGTH-1 && inputField.current[index+1]){ //checking the validation 
            inputField.current[index+1].focus()
        }
    }

    const handleClick=(index)=>{
        inputField.current[index].setSelectionRange(1,1)
    }

    const handleKeyDown=(index,e)=>{
        if(e.key==='Backspace' && !otp[index] && index>0 && inputField.current[index-1]){
            inputField.current[index-1].focus()
        }
    }

  return (
    <div className='otp-container'>
       <div className='otp-form'>
         <h2>Verify your email</h2>
         <form onSubmit={(e)=>{
            e.preventDefault()
            navigate('/productlist')
            }}>
            {otp.map((data,index)=>(
                <input
                    key={index}
                    type='text'
                    ref={(input)=>(inputField.current[index]=input)}
                    max-length='1'
                    className='otp-input'
                    value={data}
                    onChange={(e)=>handleChange(index,e)}
                    onClick={()=>handleClick(index)}
                    onKeyDown={(e)=>handleKeyDown(index,e)}

                />
            ))}
            <button type='submit' className='btn btn-primary'>Proceed</button>
         </form>
       </div>
    </div>
  )
}

export default Otp
