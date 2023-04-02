import { Outlet, Navigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const PrivateRoutes = () => {
    const history = useNavigate();
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    setTimeout(() => {
   
    }, 1500)
    
    
    return(
        localStorage.getItem("user_login")? <><Outlet/></> : (
        
            <> 
             <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please Login !!</Modal.Title>
        </Modal.Header>
       
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>
     { history("/")}
        
     
      
      </>)
    )
}

export default PrivateRoutes