import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Footer from './Footer';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { adminApi } from '../service/allApi';
import { ToastContainer,toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Admin() {

    const navigate=useNavigate()

    // state to store inputs
    const [admin,setAdmin]=useState({
         email:"", password:"" 
    })
  
    const setInputs=(e)=>{
        const {name,value}=e.target
        setAdmin({...admin,[name]:value})
    }
    console.log(admin);


    const handleAdmin=async(e)=>{
        e.preventDefault();
        const {email,password}=admin
        if( !email|| !password){
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
           const result=await adminApi(admin)
           if(result.status==200){
            
            toast.success(`${result.data} `, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

                localStorage.setItem("curentId",JSON.stringify(result.data._id))
                localStorage.setItem("currentUser",JSON.stringify(result.data))
    
            // reset user state
            setAdmin({ email:"", password:"" })
          navigate('/uploader')
    
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
            <Header></Header>

            <div style={{ height: "450px", backgroundColor: '#55c981', borderRadius: '10px', }} className='w-50  container shadow-lg mb-5 mt-5 p-5 '>
                <Row>
                    <Col  >
                        <img className='w-100' style={{ height: "300px" }}
                            src="https://i.postimg.cc/CKcsXL3R/vector-cartoon-illistration.jpg" alt="" />
                    </Col>

                    <Col>
                        <div>
                            <h1 style={{ textAlign: 'center' }}>Admin Sign Up</h1>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Enter Your Email"
                                className="mb-3"
                            >
                                <Form.Control value={admin.email} onChange={(e)=>setInputs(e)} name="email" type="text" placeholder="name@example.com" />
                            </FloatingLabel>



                          
                            <FloatingLabel  controlId="floatingPassword" label="Password">
                                <Form.Control value={admin.password} onChange={(e)=>setInputs(e)} name="password" type="password" placeholder="Password" />
                            </FloatingLabel>
                            <br />


                            <br />


                            <div style={{ textAlign: 'center', }}>
                                <button onClick={(e)=>handleAdmin(e)} className='btn btn-dark' style={{ width: '120px' }} variant="dark">Sign Up</button>
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

export default Admin;
