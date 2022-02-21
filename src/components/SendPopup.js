import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const SendPopup = ({ showModal, handleClose }) => {
    const [sendForm, SetSendFom] = useState(false)
    const [email, SetEmail] = useState(null)
    const [message, SetMessage] = useState(null)
    const [submitted, setSubmitted] = useState(false)

    //state for validation
    const validate = {
        email:false,
        message:false
    }
    const [validation, setValidation] = useState(validate)
    
    const validateInputs = () => {
        setValidation({
            ...validation,
            email : email ? false : true,
            message: message? false : true
        })
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        setSubmitted(true);
        validateInputs();
        if(validation["email"] || validation["message"]){
            return false;
        }
        
    }

    const handleInputChange = (e) => {
        debugger
        const {name, value} = e.target;
        switch(name){
            case 'email':
                SetEmail(value)
                break;
            case 'longitude':
                SetMessage(value)
                break;
            default:
                console.log(name,value);
                break;
            }
        validateInputs();
    }
    return (
        <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Send Message</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form >
                    <Form.Group className="mb-3" controlId="forlatitude">
                        <Form.Label> Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter latitude of venue" name="email" value={email} onChange={(e) => handleInputChange(e)}/>
                        <Form.Text className="text-danger" >
                           { validation["email"]? "Enter the email." : ''}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="forlongitude">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="text" placeholder="Enter longitutde of venue" name="message" value={message} onChange={(e) => handleInputChange(e)} />
                        <Form.Text className="text-danger">
                        { validation["longitude"]? "Enter the message" : ''}
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">Send Invitation</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SendPopup;