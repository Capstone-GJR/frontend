import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import btn from './button.module.css';

function DialogBox(props) {

    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleConfirmClick = () => {
        props.confirmBtn()
        handleClose();
    }

  return (
    <>
        {/* 
            Custom <Button /> component can not be imported,
            due to bootstraps components same name.
         */}
        <button 
            className={btn.button}
            onClick={handleShow}
            style={{backgroundColor: props.btnColor}}
        >
            <p className={btn.title}>
                <span className={btn.barlowFont}>{props.btnTitle}</span>   
            </p>
        </button>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>{props.modalTitle}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {props.modalBody}
            </Modal.Body>

            <Modal.Footer>
                <Button 
                    variant="secondary" 
                    onClick={handleClose}
                >
                    Cancel
                </Button>
                <Button 
                    variant={props.comfirmBtnVariant}
                    onClick={handleConfirmClick}
                >
                    Confirm
                </Button>
            </Modal.Footer>

        </Modal>
    </>
  )
}

export default DialogBox