import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import Login from "../../pages/login"
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const history = useNavigate();
    const setTime = () => {
       
           if( localStorage.getItem("user_login")) 
               { 
               localStorage.removeItem("user_login");
               history("/")
    }
               else
              
                {history("/login")}
           
       
        
    }

    // useEffect(() => {
    //     if(!localStorage.removeItem("user_login")){
    //         history("/")
    //     }
    //   }, []);
    const userdata =  localStorage.getItem("user_login") ;
     const x = JSON.parse(userdata);
     
    
    

    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none" }}><span>Upcoming</span></Link>
               {  localStorage.getItem("user_login") ?
               (
                 
                <span style={{position : "absolute", right :"1px"}}> welcome { x[0].name }  &nbsp; <button className="btn btn-danger" onClick={setTime} > logout</button> </span> 

                ):
                (<button    className="btn btn-success" style={{position : "absolute", right :"24px" , overflow:"hidden" }}  onClick={setTime}>login</button>)
               }
            </div>
        </div>
    )
}

export default Header