import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'


const Login = () => {

   
    const history = useNavigate();
    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
   

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
       


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();
        
        const getuserArr = localStorage.getItem("useryoutube");
        

        const { email, password } = inpval;
        if (email === "") {
            alert('email field is requred');
           
        } else if (!email.includes("@")) {
            alert('plz enter valid email addres');
           
        } else if (password === "") {
            alert('password field is requred');
          
        } else if (password.length < 5) {
            alert('password length greater five');
           
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                    console.log(userlogin);
                    localStorage.setItem("values",1)
                } else {
                
                    
                    localStorage.setItem("values",0)
                    localStorage.setItem("user_login", JSON.stringify(userlogin))
                    console.log("user login succesfulyy");
                    history("/");
                   
                }
            }
        }

    }

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between' >
                    <div className="text-center mt-3 p-3" style={{ width: "100%" ,height :"100%"}}>
                        <h3 className='text-center col-lg-12'>Sign IN</h3>
                        <form  action=''  onSubmit={addData}>

                           

                                <input  className="mb-3 col-lg-6" type="email" name='email' onChange={getdata} placeholder="Enter email"  value={inpval.email}/>
                         

                            
                               <div >
                                <input className="mb-3 col-lg-6"  type="password" name='password' onChange={getdata} placeholder="Password"  value={inpval.password} />
                           </div>
                            <button variant="primary" className='col-lg-6'  style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </button>
                        </form>
                        <p className='mt-3'> Create a new account <span><NavLink to="/signin">Register</NavLink> </span> </p>
                    </div>
                  
                </section>
               
            </div>
        </>
    )
}

export default Login