import login from './community.png';
  import React, { useState,useRef} from 'react';
  import { Link } from 'react-router-dom';
  import axios from 'axios';
  import toast, { Toaster } from 'react-hot-toast';
  import './Login.css'
  import { gsap } from "gsap";
  
  
  function Login() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const Appl=(()=>{
        gsap.to(".login",{
          x:2,
          duration:2,
          delay:1
        })
      })
      const loginNow = async (e) => {
          e.preventDefault();
          try {
              const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}`/login, {
                  email,
                  password,
              });
              if (response.data.success) {
                  toast.success(response.data.message);
                  localStorage.setItem('currentUser', JSON.stringify(response.data.data));
                  toast.success("Logged in successfully!");
                  toast.loading("Redirecting to home..")
                  setTimeout(() => {
                      toast.dismiss()
                      window.location.href = '/';
                  }, 3000);
              } else {
                  toast.error(response.data.message);
              }
          } catch (error) {
              console.log('Login Error :', error);
              toast.error(error.message);
          }
      };


  
      return (
        <div>
        <div className='page'>

         <h1 className='welcome'>WELCOME</h1>
             <div className='container-login' style={{display:'flex', justifyContent:'space-evenly'}}>
           
            <img src={login} ref={Appl} className='login'/>
              
              <div className='signup-login-form' style={{  }}>
              <h1 className='signup-login-heading'>USER LOGIN</h1>
              <h3 className="text-balance ... bg-transparent text-green-50" style={{marginTop:'20px', color:'#8c8c90', fontSize:'18px'}}>Email Address</h3>
                  <input
                      type='email'
                      className='user-input'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                  <h3 className="text-balance ... bg-transparent text-green-50" style={{marginTop:'20px', color:'#8c8c90', fontSize:'18px'}}>Password</h3>
                  <input
                      type='password'
                      className='user-input'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
                  <button onClick={loginNow} className='btn-auth'>Login</button>
              </div>
              </div>
              <Link to='/signup' className="signup-login-link"> Don't have an account? SIGNUP</Link>
              <Toaster />
          </div>
          </div>
      );
  }
  
  export default Login;
