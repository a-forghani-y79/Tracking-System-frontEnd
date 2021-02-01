import { React, useState, useEffect } from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
function AddMember(props) {
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };
    return (
      
        <>
            {/* <button onClick={showModal}>Display Modal</button> */}
            {props.show ?
             <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>
                    <Modal.Title>Hi</Modal.Title>
                </Modal.Header>
                <Modal.Body>The body</Modal.Body>
                <Modal.Footer>
                    <button onClick={hideModal}>Cancel</button>
                    <button>Save</button>
                </Modal.Footer>
            </Modal>:
            null
            }
           
        </>
    )
}

export default AddMember;
