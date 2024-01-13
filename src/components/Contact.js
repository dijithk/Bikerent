import React from 'react'
import './Contact.css'
import { Col, Container, Row } from 'react-bootstrap'

function Contact() {


    return (
        <div id='contact' style={{ width: '100%' }}>

            <h1 className='text-center'>CONTACT US</h1>


            <div style={{ marginTop: '100px' }} className='ms-5'>
                <Row className='ms-5' style={{ height: '1000px', width: "100%", }}>
                    <Col>
                        <Row>
                            <Col id='left' >
                                <div className="form-group">

                                    <input type="text" id="name" name="name" placeholder="Your name" required />
                                </div>

                                <div className="form-group">

                                    <input type="tel" id="phone" name="phone" placeholder="Your phone number" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="from-date">From Date:</label>
                                    <input type="date" id="from-date" name="from-date" />
                                </div>


                                <div className="form-group">
                                    <label htmlFor="bike-type">Bike Type:</label>
                                    <select name="bike-type" id="bike-type">
                                        <option value="city-bike">Bikes</option>
                                        <option value="mountain-bike">Scooty</option>

                                    </select>
                                </div>





                            </Col>



                            <Col id='right'>
                                <div className="form-group">

                                    <input type="email" id="email" name="email" placeholder="Your email" required />
                                </div>

                                <div className="form-group">

                                    <input type="tel" id="phone" name="phone" placeholder="Your whatsapp number" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="to-date">To Date:</label>
                                    <input type="date" id="to-date" name="to-date" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="location">Location:</label>
                                    <select name="location" id="location">
                                        <option value="kochi">Kochi</option>
                                        <option value="calicut">Palakkad</option>
                                    </select>
                                </div>



                            </Col>


                        </Row>
                        <div className="form-group " style={{ marginBottom: '250px', width: '100%' }}>
                            <label htmlFor="message">Message:</label>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message"></textarea>

                            <button type="submit" className="btn btn-outline-primary">Send Message</button>
                        </div>

                  


                    </Col>

                    <Col>

                        <Row>
                            <Col>

                                <div id='l1' className='mt-5 ms-5' style={{ background: ' #b3d9ff', width: '300px', height: '300px', color: 'black' }}>



                                    
                                        <h3><i class="fa-solid fa-location-dot "></i>Kochi Office</h3>
                                        <h2>Kakkanad</h2>
                                        <p style={{ color: 'black' }}>Eachmokku,Kochi,Kerala 682037</p>
                                        <h5>Phone: +91 9995572222</h5>
                                    

                                </div>

                                <div id='l1' className='mt-5 ms-5' style={{ background: '#b3d9ff', width: '300px', height: '300px', color: 'black' }}>

                                    
                                        <h3><i class="fa-solid fa-location-dot "></i>Palakkad office</h3>
                                        <h2>Vandazhy</h2>
                                        <p style={{ color: 'black' }}>mallamkottuparambu, kizhakkethara, vandazhy, palakkad 678706</p>
                                        <h5>Phone: +91 9995572222</h5>
                                    
                                </div>
                            </Col>
                        </Row>
                    </Col>  </Row>

            </div>
        </div>
    )
}

export default Contact