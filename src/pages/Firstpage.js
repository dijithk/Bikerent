import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Firstpage() {
  return (
    <div>

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
     
   <Link to={'/login'}> <button  className="want-button">Go Explore <i class="fa-solid fa-arrow-right fa-beat-fade"></i></button></Link>
    {/* <button id='a4' className='btn  w-25  '>Go Explore</button> */}
  </div>

</Col >

<Col >

  <img  src="https://i.postimg.cc/1tVsvyXk/fisrt-imge.jpg" alt="" />

</Col>


</Row>

    </div>
  )
}

export default Firstpage