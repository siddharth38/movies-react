import React from "react"
import "./Header.css"
import { useRef } from "react";
import { Link } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import Login from "../../pages/login"
import { useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {

    const history = useNavigate();
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);}
    const setTime = () => {
       
           if( localStorage.getItem("user_login")) 
               { 
               localStorage.removeItem("user_login");
               history("/")
    }
               else
              
                {history("/login")}
           
       
        
    }

    const userdata =  localStorage.getItem("user_login") ;
     const x = JSON.parse(userdata);
    return (<>
      
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
                
              <Container >
                <Navbar.Brand  className="me-6 ">   <span><Link to="/"><img className="header__icon" src="https://t3.ftcdn.net/jpg/05/41/10/34/360_F_541103490_Hvrk74WHKMdFss5JYHuKTMGP9iaTOzyP.jpg" /></Link></span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto fs-5 fw-bold">
                 
                  
                    <Nav.Link>   <Link to="/movies/popular" style={{textDecoration: "none" , color:"white"}}><span className="span">   Popular </span></Link></Nav.Link>

                    <Nav.Link>   <Link to="/movies/top_rated" style={{textDecoration: "none", color:"white"}}><span className="span"> Top Rated</span></Link> </Nav.Link>
                    <Nav.Link>    <Link to="/movies/upcoming" style={{textDecoration: "none" ,color:"white"}} ><span className="span" > Upcoming</span></Link> </Nav.Link>
                  </Nav>
                  <Nav className=" fs-5">
                    <Nav.Link href="#deets">  { 
            
            
            localStorage.getItem("user_login") ?
               (
                 
                <span > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; welcome { x[0].name }  &nbsp; <button className="bt" onClick={setTime} > logout</button> </span> 

                ):
                (<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button    className="button"   onClick={setTime}> login </button> </span>)
               }</Nav.Link>
                    
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            </>
    
        
    )
}

export default Header