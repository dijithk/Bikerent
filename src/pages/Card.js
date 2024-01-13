import React, { useEffect } from 'react'
import './Card.css'
import Table from 'react-bootstrap/Table';
import Header from '../components/Header'
import Footer from '../components/Footer'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { bookingApi, deleteCardApi, getAllCardsApi } from '../service/allApi';
import { all } from 'axios';
import { BASE_URL } from '../service/baseUrl';
import AdminHeader from '../components/AdminHeader';
// import Bikes from './Bikes';



function Card({ admin }) {


  const [allCards, setAllCards] = useState([])



  const getCardsAll = async () => {
    const response = await getAllCardsApi()
    setAllCards(response.data)
  }

  // console.log(allCards);


  // user booking

  const [bookingInputs, setBookingInputs] = useState({
    name: "", proof: "", phone: "", from: "", to: "", location: ""
  })

  const setInputs = (e) => {
    const { value, name } = e.target
    setBookingInputs({ ...bookingInputs, [name]: value })
  }

  // console.log(bookingInputs);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async (e, id) => {
    e.preventDefault()
    console.log(id);
    const reqHeader = {
      "Content-Type": "application/json"
    }
    const response = await deleteCardApi(id, reqHeader)
    handleClose()


  }

  const handleAdd = async (e) => {
    e.preventDefault();
    const { name, proof, phone, from, to, location } = bookingInputs
    if (!name || !proof || !phone || !from || !to || !location) {
alert("please fill all datas")
    }
    else{
      // body
      const reqBody=new FormData()
      reqBody.append("name",name)
      reqBody.append("proof",proof)
      reqBody.append("phone",phone)
      reqBody.append("from",from)
      reqBody.append("to",to)
      reqBody.append("location",location)

      const result= await bookingApi(reqBody)
      console.log(result);

      if(result.status==200){
        alert(`your bike is booked`)
        setBookingInputs({...bookingInputs,name: "", proof: "", phone: "", from: "", to: "", location: ""
      })
        handleClose()


      }
      else{
        alert(result.response.data)
      }

    }
  }


  useEffect(() => {
    getCardsAll()
  }, [handleDelete])


  return (
    <div>
      {admin ? <AdminHeader></AdminHeader> : <Header></Header>}


      {/* <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
        <div class="group">
          <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
          <input placeholder="Search Bike" type="search" class="input" />
        </div>
      </div> */}

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>






        {allCards?.length > 0 ? allCards.map(i => (

          <div id='c1'>
            <img style={{ height: '230px' }} src={i ? `${BASE_URL}/uploads/${i.bikeImage}` : "image not found"} alt="" />

            <div>
              <h1 className='text-center' id='c2'>{i.title}</h1>
              <Table striped bordered hover size="sm">
                <thead className='text-center'>
                  <tr>


                    <th>Details</th>

                  </tr>
                </thead>
                <tbody className='text-center'>
                  <tr>


                    <td>Model:{i.models}</td>

                  </tr>

                  <tr>


                    <td>Seat:{i.seat}</td>

                  </tr>

                  <tr>

                    <td>{i.gear}</td>

                  </tr>

                  {/* <tr>
  
         
          <td>gray</td>
          
        </tr> */}

                  <tr>


                    <td>payment:₹{i.rent}</td>

                  </tr>
                </tbody>
              </Table>
            </div>

            {admin ?
              <div className='btn-container' >
                <button className='btn btn-outline-success w-50 ms-5' onClick={(e) => handleDelete(e, i._id)}>Delete</button>
              </div> :
              <div className='btn-container' >
                <button className='btn btn-outline-success w-50 ms-5' onClick={handleShow} >Book Now</button>
              </div>

            }


          </div>


        )) : <h1>no cards</h1>

        }


      </div>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id='m1'>Fill The Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <input value={bookingInputs.name} name='name' onChange={(e) => setInputs(e)} type="text" placeholder='Enter your name' style={{ height: '30px' }} />
          <input value={bookingInputs.proof} name='proof' onChange={(e) => setInputs(e)} type="text" placeholder='Enter your Adhar Number' className='mt-3' style={{ height: '30px' }} />
          <input value={bookingInputs.phone} name='phone' onChange={(e) => setInputs(e)} type="text" placeholder='Phone number' className='mt-3' style={{ height: '30px' }} />
          <label  htmlFor="Fromdate" className='mt-1'>From Date</label>
          <input value={bookingInputs.from} name='from' onChange={(e) => setInputs(e)} type="date" placeholder='date' className='' style={{ height: '30px' }} />

          <label htmlFor="Todate" className='mt-1'>To Date</label>
          <input value={bookingInputs.to} name='to' onChange={(e) => setInputs(e)} type="date" placeholder='To date' className='' style={{ height: '30px' }} />


          <div className="form-group">
            <label  htmlFor="location">Location:</label>
            <select value={bookingInputs.location} name="location" onChange={(e) => setInputs(e)} id="location">
              <option value="kochi">Kochi</option>
              <option value="palakkad">palakkad</option>
            </select>
          </div>






        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className='w-25' onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" className='w-25' onClick={(e) => handleAdd(e)}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <Footer></Footer>
    </div>
  )
}

export default Card