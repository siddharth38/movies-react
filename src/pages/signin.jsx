import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Home = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    })

   

    const [data,setData] = useState([]);
   

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const { name, email, date, password } = inpval;

        if (name === "") {
            alert(' name field is requred!'
            );
        } else if (email === "") {
             alert('email field is requred');
        } else if (!email.includes("@")) {
             alert('plz enter valid email addres');
        } else if (date === "") {
             alert('date field is requred');
        } else if (password === "") {
             alert('password field is requred');
        } else if (password.length < 5) {
             alert('password length greater five',{
                position: "top-center",
            });
        } else {
            console.log("data added succesfully");
            console.log(inpval);
            
            localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));
            history("/login")

        }

    }

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="text-center mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-12'>Register</h3>
                        <form >
                            <div  >

                                <input className="mb-3 col-lg-6" type="text" name='name' onChange={getdata} placeholder=" Enter Your Name" 
                                value={inpval.name}/>
                            </div>
                            <div  >

                                <input className="mb-3 col-lg-6" type="email" name='email' onChange={getdata} placeholder=" Enter email"  value={inpval.email}/>
                            </div>

                            <div  >

                                <input  className="mb-3 col-lg-6" onChange={getdata} name='date' type="date"  value={inpval.date}/>
                            </div>

                            <div >

                                <input  className="mb-3 col-lg-6" type="password" name='password' onChange={getdata} placeholder="Password"  value={inpval.password}/>
                            </div>
                            <button variant="primary" className=' mb-3 col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </button>
                        </form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span> </p>
                    </div>
                   
                </section>
                
            </div>
        </>
    )
}

export default Home