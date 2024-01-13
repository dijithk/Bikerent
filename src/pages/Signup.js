import React, { useState } from 'react';
import './Signup.css';
import { Col, Row } from 'react-bootstrap';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
// import Header from '../components/Header';
import { registerApi } from '../service/allApi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';


function Signup() {

    const navigate=useNavigate()

    // state to store inputs
    const [user,setUser]=useState({
        userName:"", email:"", password:"" 
    })

    const setInputs=(e)=>{
        const {name,value}=e.target
        setUser({...user,[name]:value})
    }
    console.log(user);

   const handleRegister=async(e)=>{
    e.preventDefault();
    const {userName,email,password}=user
    if(!userName || !email|| !password){
        toast.error("Please fill all datas", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

    }
    else{
       const result=await registerApi(user)
       if(result.status==200){
        
        toast.success(`${result.data.userName} your account created successfully`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

        // reset user state
        setUser({userName:"", email:"", password:"" })
      navigate('/login')

       }
       else{
        toast.error(result.response.data, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
       
       }
    }
   }



  return (
   <div>
  {/* <Header></Header> */}

  <h1 style={{textAlign:'center'}} className='mt-5'>Sign Up</h1>
               
             <div  style={{ height:"450px", backgroundColor: '',borderRadius:'10px',  }} className='w-50  container shadow-lg mb-5 mt-4 p-5 '>
                  <Row>
                      <Col  >
                          <img className='w-100'style={{height:"300px"}}
                              src="https://i.postimg.cc/CKcsXL3R/vector-cartoon-illistration.jpg" alt="" />
                      </Col>
  
                      <Col>
                          <div>
                             
                              <FloatingLabel
                                  controlId="floatingInput"
                                  label="Enter Your Name"
                                  className="mb-3"
                              >
                                  <Form.Control value={user.userName} onChange={(e)=>setInputs(e)} name="userName"
                                   type="text" placeholder="enter your name" />
                              </FloatingLabel>
  
  
  
                              <FloatingLabel
                                  controlId="floatingInput"
                                  label="Email address"
                                  className="mb-3"
                              >
                                  <Form.Control value={user.email} onChange={(e)=>setInputs(e)} name="email" type="email" placeholder="name@example.com" />
                              </FloatingLabel>
                              <FloatingLabel controlId="floatingPassword" label="Password">
                                  <Form.Control value={user.password} onChange={(e)=>setInputs(e)} name="password" type="password" placeholder="Password" />
                              </FloatingLabel>
                              <br />
                             <p > Already you have an account? <Link to={"/login"} style={{textAlign:'center'}} >Login</Link></p>
  
                              
                              <br />
  
  
                              <div style={{ textAlign: 'center', }}>
                                  <button onClick={(e)=>handleRegister(e)} className='btn btn-dark' style={{width:'120px'}} variant="dark">Sign Up</button>
                              </div>
  
                          </div>
                      </Col>
                  </Row>
  
             </div>
             <ToastContainer />
             <Footer></Footer>

   </div>
  );
}

export default Signup;
