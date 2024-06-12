import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'

const Register = () => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [isRegistered,setIsRegistered]=useState(false)
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(password!==confirmPassword){
            alert('The passwords do not match!')
            return
        }else{
            navigate('/otp')
        }
    }

    const login=(e)=>{
        e.preventDefault()
        navigate('/otp')
    }

    const toggleRegisteredStatus=()=>{
        setIsRegistered(!isRegistered)
    }

  return (
    <div className='register-container'>
       <div className='register-form'>
          <h1>{isRegistered ? 'Log in to Admin Panel':'Register to admin Panel'}</h1>
          <form onSubmit={!isRegistered ? handleSubmit : login}>
             <div className='form-group'>
                <label>Email ID</label>
                <input 
                    type='email'
                    className='form-control'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder='Enter your email ID'
                    required
                />                
             </div>
             <div className='form-group'>
                <label>Password</label>
                <input
                    type='password'
                    className='form-control'
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                />
             </div>
             {!isRegistered && (
                <div className='form-group'>
                    <label>Confirm Password</label>
                    <input
                        type='password'
                        className='form-control'
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
             )}
             <button type='submit' className='btn btn-primary'>
                {isRegistered ? 'Login':'Register'}
             </button>
          </form>
          <p>
            {isRegistered ? 'New User':'Already have an account'}
            <button onClick={toggleRegisteredStatus} className='btn btn-link'>
                {isRegistered ? 'Register here':'Login here'}
            </button>
          </p>
       </div>
    </div>
  )
}

export default Register
