import './App.css';

import React, { useState } from "react"
import { Button, Navbar, Container, Modal, Card, InputGroup,FormControl, Col, Row,
  DropdownButton,Dropdown } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
// import DatePicker from 'react-date-picker';

import logo from './images/khana.png';
import card1 from './images/check.jpg';

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
   <Navbar>
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="Logo" height="80px" /></Navbar.Brand>
          {/* <Nav.Link >Need Food</Nav.Link> */}
          
          &nbsp;&nbsp;

          <Bank />
          {/* <Nav.Link href="#home">Food Bank</Nav.Link> */}
          &nbsp;&nbsp;&nbsp;&nbsp;
          {/* <Navbar.Text>Status:</Navbar.Text>
          <Nav.Link href="#home">Pending...</Nav.Link> */}
          
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <strong>Email:</strong> {currentUser.email}
              &nbsp;&nbsp;
              <Button onClick={handleLogout}>Log Out</Button>
              {/* <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button> */}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Row xs={1} md={3} className="g-4">
  
    <Col>
      <Card className='mt-2'>
        <Card.Img variant="top" src="https://i.dawn.com/large/2020/03/5e83ca717aa03.jpg" />
        <Card.Body>
          <Card.Title>Numaish Chowrangi</Card.Title>
          <Card.Text>
          <Example />
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  
    <Col>
      <Card className='mt-2'>
        <Card.Img variant="top" src="https://lh5.googleusercontent.com/p/AF1QipMVwAD-pc9_TvZgoaw-4IDBE5K9wkF-_NH_xDCb=w1080-k-no" />
        <Card.Body>
          <Card.Title>Hill Park</Card.Title>
          <Card.Text>
          <Example />
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col>
      <Card className='mt-2'>
        <Card.Img variant="top" src="https://lh5.googleusercontent.com/p/AF1QipMNZin8MPxtaO-DKUusM5jG_TCfNF8AKmlYwXIP=w1080-k-no" />
        <Card.Body>
          <Card.Title>Saylani House Phase 2</Card.Title>
          <Card.Text>
          <Example />
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
</Row>
  
    </>
  )
}





function Example() {
  const [show, setShow] = useState(false);
  const [value, onChange] = useState(new Date());

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Apply Food
      </Button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          Fill this form to get food!
          <InputGroup className="mb-3">
            <InputGroup.Text>Your Name</InputGroup.Text>
            <FormControl aria-label="Name" />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Father Name</InputGroup.Text>
            <FormControl aria-label="Father Name" />

          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text type="number">CNIC Number</InputGroup.Text>
            <FormControl aria-label="CNIC" />

          </InputGroup>

          

          <InputGroup className="mb-3">
            <InputGroup.Text type="number">Family Members</InputGroup.Text>
            <FormControl aria-label="No of Family Members" />

          </InputGroup>


          <InputGroup className="mb-3">
            <InputGroup.Text type="number">Choose Category</InputGroup.Text>
            <DropdownButton id="dropdown-basic-button" title="Select Type">
              <Dropdown.Item href="#/action-1">Monthly</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Yearly</Dropdown.Item>

            </DropdownButton>

          </InputGroup>


          <InputGroup className="mb-3">
            <InputGroup.Text type="number">Times You Need</InputGroup.Text>
            <DropdownButton id="dropdown-basic-button" title="Select Type">
              <Dropdown.Item href="#/action-1">1 time</Dropdown.Item>
              <Dropdown.Item href="#/action-2"> 2 times</Dropdown.Item>
              <Dropdown.Item href="#/action-2"> 3 times</Dropdown.Item>


            </DropdownButton>

          </InputGroup>



          <InputGroup className="mb-3">
            <InputGroup.Text type="number">Upload Your Image</InputGroup.Text>
            <input type="file" name="file" />
          </InputGroup>


          <InputGroup className="mb-3">
            <InputGroup.Text type="number">Upload Your CNIC front and Back Image</InputGroup.Text>
            <input type="file" name="file" />
          </InputGroup>


          <InputGroup className="mb-3">
            <InputGroup.Text>Monthly Income</InputGroup.Text>
            <FormControl aria-label="income" />
          </InputGroup>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            SUBMIT
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}





function Bank() {
  const [show, setShow] = useState(false);
  const [value, onChange] = useState(new Date());

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Food Bank
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Food Banks</Modal.Title>
        </Modal.Header>
        <Modal.Body>

         <center> All Food Banks Available</center>

          {/* <div>
        {PostData.map((postDetail, index) => {
          return <h6>
           <b> {postDetail.branch_name}</b>
           <p>Latitude: {postDetail.latitude} <br/>
           Longitude: {postDetail.longitude}</p>

           
          


          </h6> 
          
          
        })}
      </div> */}





        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button> */}
        </Modal.Footer>
      </Modal>
 
  


   
      {/* <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div> */}

      
    </>
    
  )
}
