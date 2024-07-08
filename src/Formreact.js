import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './Formcss.css'

const Formreact = ({show,handleClose}) => {
    const[data,setdata]=useState({
        name:"",
        contactnumber:"",
        organisationname:"",
        emailid:"",
        staffsize:0
    })

    const handlechange=(e)=>{
const{name,value}=e.target
setdata({...data,[name]:value})
console.log(data)
    }
    const handlesubmit=()=>{
        console.log(data)
    }
  return (
    <div>
      <Modal show={show} onHide={handleClose} centered className='pad-mar'>
        <Modal.Header className=' d-flex  justify-content-between'>
            <div>
          <Modal.Title className='color-fix'>Register For Trial</Modal.Title>
            <p className='mar-p'>Please help us with more details so we can help you better.</p>
            </div>
           <button  onClick={handleClose} className="btn-close-1">X</button>
        </Modal.Header>

        <Modal.Body>
        <Form className='px-4'>
        <Form.Group className="mb-1" controlId="formBasic1">
        <Form.Label>Name <span className=' text-danger'>* </span> </Form.Label>
        <Form.Control type="text" placeholder="Enter Full Name" size="lg" onChange={handlechange} name="name" value={data.name} />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasic2">
        <Form.Label>Contact Number <span className=' text-danger'>* </span> </Form.Label>
        <Form.Control type="text" placeholder="Enter Contact Number" size="lg" onChange={handlechange} name="contactnumber" value={data.contactnumber}/>

      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasic3">
        <Form.Label>organisation Name <span className=' text-danger'>* </span> </Form.Label>
        <Form.Control type="text" placeholder="Enter organisation Name" size="lg" onChange={handlechange} name="organisationname" value={data.organisationname}/>

      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasic4">
        <Form.Label>Email ID <span className=' text-danger'>* </span></Form.Label>
        <Form.Control type="email" placeholder="Enter Email ID" size="lg" onChange={handlechange} name="emailid" value={data.emailid}/>

      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasi">
        <Form.Label>Staff Size <span className=' text-danger'>* </span></Form.Label>
        <Form.Control type="number" placeholder="Staff size" size="lg" onChange={handlechange} name="staffsize" value={data.staffsize} />
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer className=' d-flex justify-content-center'>
        <Button  type="submit" className='btn-color-fix' onClick={handlesubmit}>
        Submit
      </Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default Formreact