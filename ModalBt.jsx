import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ModalBt() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Assinar
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Parabéns!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Seu email foi cadastrado com sucesso!! Em breve você receberá um email contendo nossos horários e preços dos próximos 30 dias!!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 export default ModalBt