import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Col, Row } from 'react-bootstrap'
import './Home.css';


import Card from 'react-bootstrap/Card';
import Contact from '../components/Contact';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>

      <Header></Header>

      <Row>


        <Col>

          <div id='a5'>
            <h3 id='a1' className='mt-5 text-center'>Need A Motor Bike</h3>
            <h1 id='a2' className='mt-3 text-center'>RENTAL?</h1>
            <h4 id='a3' className='mt-3 text-center'>Rent from India's Largest Fleet of Vehicles, Trusted by millions</h4>
          </div>
          <br />
             <br />

          <div style={{ width: '100%', height: "10px" }} className='container'>
             
            <button class="want-button w-25">Go Explore <i class="fa-solid fa-arrow-right fa-beat-fade"></i></button>
            {/* <button id='a4' className='btn  w-25  '>Go Explore</button> */}
          </div>

        </Col>

        <Col >

          <img src="https://i.postimg.cc/x8pDB1hD/illustration-scooter.jpg" alt="" />

        </Col>


      </Row>

<h1 id='a2 '  className='text-center'>Find Your Bikes</h1>

<Row style={{height:'100%'}}>
  <Col  className="ms-5 container" style={{height:'100%'}}>
  <Card style={{ width: '20rem', height:'500px',}}>
      <Card.Img variant="top" src="https://i.postimg.cc/V5QR2rHZ/hero-splendor.jpg/100px180" />
      <Card.Body>
        <Card.Title className='text-center'>BIKE</Card.Title>
        <Card.Text className='text-center'>
        must rent a bike in excellent shape for your trip.
        </Card.Text>
       <Link to={'/Card'}> <button className='btn btn-outline-success w-50 a1 ' >More Explore</button></Link>
      </Card.Body>
    </Card>
  </Col>


  <Col   className="me-5 container" style={{height:'100%'}}>
  <Card style={{ width: '20rem' ,height:'500px'}}>
      <Card.Img variant="top" src="https://i.postimg.cc/15kkY9wf/Honda-Dio.jpg/100px180" />
      <Card.Body>
        <Card.Title className='text-center'>SCOOTY</Card.Title>
        <Card.Text className='text-center'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
<Link to={'/card'}>
          <button  className='btn btn-outline-success w-50 a1   '>More Explore</button>
  
</Link>      </Card.Body>
    </Card>

  </Col>
</Row>
<br />
{/* Contact and about */}

<Contact></Contact>

      <Footer></Footer>
    </div>
  )
}

export default Home