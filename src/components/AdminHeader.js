import React, { useState } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBInputGroup,
} from 'mdb-react-ui-kit';
import { Link, } from 'react-router-dom';
function AdminHeader() {
    const [openBasic, setOpenBasic, openNavRight, setOpenNavRight] = useState(false);

  return (
    <div>
        
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <Link to={'/home'}>
              <img className='' style={{ width: '60px', height: '60px' }} src="https://i.postimg.cc/tT8zvG3k/motorcycle.png" alt="" />

            </Link>          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenBasic(!openBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar open={openBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 '>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                <h1 style={{fontFamily:"Lobster"}}>Let<span style={{fontFamily:"Odor Mean Chey"}}>Easy</span></h1>

                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
           
            <MDBNavbar expand='lg' light bgColor='light'>
              <MDBContainer fluid>
                <MDBNavbarToggler
                  type='button'
                  data-target='#navbarRightAlignExample'
                  aria-controls='navbarRightAlignExample'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                  onClick={() => setOpenNavRight(!openNavRight)}
                >
                  <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>


                <MDBCollapse navbar open={openNavRight}>
                  <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0 me-5'>

                   <Link to={'/home'} style={{textDecoration:'none'}}>
                        <MDBNavbarItem>
                          <MDBNavbarLink href='#' >Home</MDBNavbarLink>
                        </MDBNavbarItem>
                   </Link>

             

              <Link to={'/uploader'} style={{textDecoration:'none'}}>
                        <MDBNavbarItem>
                      
                             <MDBNavbarLink href='#' >
                             Upload
                           </MDBNavbarLink>
                        </MDBNavbarItem>
              </Link>




                   



                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default AdminHeader