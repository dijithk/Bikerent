import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Col, Row } from 'react-bootstrap';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addBikeApi } from '../service/allApi';
import { Link } from 'react-router-dom';

function Uploader() {

  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // state for image preview
  const [preview, setPreview] = useState("")

  const [token, setToken] = useState("")

  const [bikesInputs, setBikeInputs] = useState({
    title: "", models: "", seat: "", gear: "", rent: "", bikeImage: ""
  })

  const setInputs = (e) => {
    const { value, name } = e.target
    setBikeInputs({ ...bikesInputs, [name]: value })
  }

  useEffect(() => {
    if (bikesInputs.bikeImage) {
      setPreview(URL.createObjectURL(bikesInputs.bikeImage))
    }
    else{
      setPreview("")
    }

  }, [bikesInputs.bikeImage])


  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"))
    }
    else {
      setToken("")
    }

  }, [])
  console.log(token);


   console.log(bikesInputs);

  const handleAdd = async (e) => {
    e.preventDefault()
    const { title, models, seat, gear, rent, bikeImage } = bikesInputs




    if (!title || !models || !seat || !gear || !rent || !bikeImage) {
      alert("please fill all datas")

    }
    else {
      // header
      const headerConfig = {
        "Content-Type": "multipart/form-data",

      }
      // body
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("models", models)
      reqBody.append("seat", seat)
      reqBody.append("gear", gear)
      reqBody.append("rent", rent)
      reqBody.append("bikeImage", bikeImage)

      console.log(reqBody);

      const result = await addBikeApi(reqBody,headerConfig)
      console.log(result);

      if(result.status==200){
        alert(`${result.data.title} added`)
        setBikeInputs({...bikesInputs,title:"",models:"",seat:"",gear:"",rent:"",bikeImage:""})
        handleClose()


      }
      else{
        alert(result.response.data)
      }
    }
  }

  

  return (
    <div>
      {/* <Header /> */}

      <div  className="row">
        <div  className="col-2" style={{ backgroundColor: 'rgb(41, 173, 212)', height: '800px',border:"0" }}>
          <ul className="list-group list-group-flush">
         <Link to={'/home'} style={{textDecoration:'none'}}>
              <li style={{ backgroundColor: 'rgb(41, 173, 212)',border:'0' }} className="list-group-item text-white py-4">
                <i className="fa-solid fa-house-user text-white px-2"></i>
                Home
              </li>
         </Link>
<hr />
           <Link to={'/admincard'} style={{textDecoration:'none',border:'none'}} >
              <li style={{ backgroundColor: 'rgb(41, 173, 213)',border:"0" }} className="list-group-item text-white py-4">
                  <i className="fa-solid fa-upload text-white px-2 "></i>
                  Card
               
              </li>
  
           </Link>
<hr />
           
            <Link to={'/admin'} style={{textDecoration:'none'}} >
              <li style={{ backgroundColor: 'rgb(41, 173, 213)',border:"0" }} className="list-group-item text-white py-4">
                <a style={{ textDecoration: 'none', color: 'white' }}>
                  <i className="fa-solid fa-right-from-bracket text-white px-2 "></i>
                  Logout
                </a>
              </li>
            </Link>

            <li></li>
          </ul>
        </div>

        {/* caption and photo */}

        <div className='col-10'>
          <Row>
            <Col>
              <div id="a5">
                <h3 id="a1" className="mt-5 text-center">
                  Need A Motor Bike
                </h3>
                <h1 id="a2" className="mt-3 text-center">
                  RENTAL?
                </h1>
                <h4 id="a3" className="mt-3 text-center">
                  Rent from India's Largest Fleet of Vehicles, Trusted by millions
                </h4>
              </div>
              <br />
              <br />

              <div style={{ width: '100%', height: '10px' }} className="container">
                <button onClick={handleShow} className="want-button w-25">
                  Upload <i className="fa-solid fa-arrow-up fa-beat-fade"></i>
                </button>
              </div>
            </Col>

            <Col>
              <img src="https://i.postimg.cc/CKcsXL3R/vector-cartoon-illistration.jpg" alt="" />
            </Col>
          </Row>
        </div>
      </div>



      {/* upload card */}

      <Modal show={show} onHide={handleClose} centered size='lg'>
        <Modal.Header closeButton>
          <Modal.Title ><h3 className='text-primary '>Add Bikes</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Row>

            <Col>
              <label htmlFor="img1" className='text-center'>
                <input name='bikeImage' onChange={(e) => setBikeInputs({ ...bikesInputs, ["bikeImage"]: e.target.files[0] })} type="file" style={{ display: 'none' }} id="img1" />
                <img style={{ height: '300px ' }} className='w-100'
                  src={preview ? preview : "https://i.postimg.cc/sXWK1LZC/download-2.jpg."} alt="" />
              </label>
            </Col>
            <Col>
              <input value={bikesInputs.title} name='title' onChange={(e) => setInputs(e)} type="text" placeholder='bike Name' className='form-control p-2 mt-3' />
              <input value={bikesInputs.models} name='models' onChange={(e) => setInputs(e)} type="text" placeholder='bike model' className='form-control p-2 mt-3' />
              <input value={bikesInputs.seat} name='seat' onChange={(e) => setInputs(e)} type="text" placeholder='Seat Capasity' className='form-control p-2 mt-3' />
              <input value={bikesInputs.gear} name='gear' onChange={(e) => setInputs(e)} type="text" placeholder='Gear/Gearless' className='form-control p-2 mt-3' />
              <input value={bikesInputs.rent} name='rent' onChange={(e) => setInputs(e)} type="text" placeholder='Rent fee' className='form-control p-2 mt-3' />



            </Col>
          </Row>



        </Modal.Body>
        <Modal.Footer>
          <Button className='w-25' variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className='w-25' variant="primary" onClick={(e) => handleAdd(e)}>
            Add Bikes
          </Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </div>
  );
}

export default Uploader;
