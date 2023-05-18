import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const AddMovie = ({add}) => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [rate, setRate] = useState('');
   const [posterUrl, setPosterUrl] = useState('');
    
   const handleTitle=(e)=>{
    setTitle(e.target.value)
   }
   const handleDescription=(e)=>{
    setDescription(e.target.value)
   }
   const handleRate=(e)=>{
    setRate(e.target.value)
   }
   const handlePosterUrl=(e)=>{
    setPosterUrl(e.target.value)
   }
   const handleMovie=(e)=>{
    let newMovie ={title, description, rate, posterUrl}
    add(newMovie);
    handleClose();
   }
      return (
        <>
          <Button variant="warning" onClick={handleShow} 
          style={{marginRight:'70%', marginBottom:'30px'}}>
          Add Movie
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Adding Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter the title" value={title} onChange={(e)=>handleTitle(e)} />
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter the description" value={description} onChange={(e)=>handleDescription(e)} /> 
            <Form.Label>Rate</Form.Label>
            <Form.Control type="number" placeholder="Enter the rate" value={rate} onChange={(e)=>handleRate(e)}/>  
            <Form.Label>URL</Form.Label>
            <Form.Control type="text" placeholder="Enter the URL" value={posterUrl} onChange={(e)=>handlePosterUrl(e)}/>   
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={()=>handleMovie()}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
    
export default AddMovie;