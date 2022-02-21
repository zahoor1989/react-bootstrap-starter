import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const InvitationPopup = ({ showModal, handleClose, handleSearchForm }) => {
    const [latitude, setLatiude] = useState('51.5144636');
    const [longitude, setLongitude] = useState('-0.142571');
    const [unit, setUnit] = useState('KM');
    const [distance, setDistance] = useState(0);
    const [submitted, setSubmitted] = useState(false)
    //state for validation
    const validate = {
        latitude:false,
        longitude:false,
        distance:false,
        unit:false
    }
    const [validation, setValidation] = useState(validate)
    
    const validateInputs = () => {
    if(latitude) setValidation({
            ...validation,
            latitude : latitude ? false : true,
            longitude : longitude? false : true,
            unit : unit ? false : true,
            distance : distance ? false : true

        })
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        debugger
        setSubmitted(true);
        validateInputs();
        if(validation["latitude"] || validation["longitude"] || validation["unit"] || validation["distance"]){
            return false;
        }
        
        await handleSearchForm({
            latitude,
            longitude,
            unit,
            distance
        })
        
    }

    const handleInputChange = (e) => {
        debugger
        const {name, value} = e.target;
        switch(name){
            case 'latitude':
                setLatiude(value)
                break;
            case 'longitude':
                setLongitude(value)
                break;
            case 'units':
                setUnit(value)
                break;
            case 'distance':
                setDistance(Number(value))
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
                <Modal.Title>Invite Partners</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group className="mb-3" controlId="forlatitude">
                        <Form.Label>Venue Latitude</Form.Label>
                        <Form.Control type="text" placeholder="Enter latitude of venue" name="latitude" value={latitude} onChange={(e) => handleInputChange(e)}/>
                        <Form.Text className="text-danger" >
                           { validation["latitude"]? "Enter the latitude of Venue." : ''}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="forlongitude">
                        <Form.Label>Venue Longitude</Form.Label>
                        <Form.Control type="text" placeholder="Enter longitutde of venue" name="longitude" value={longitude} onChange={(e) => handleInputChange(e)} />
                        <Form.Text className="text-danger">
                        { validation["longitude"]? "Enter the longitutde of Venue." : ''}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="forDistance">
                        <Form.Label>Distance From Venue</Form.Label>
                        <Form.Control type="number" placeholder="Enter distance from venue" name="distance" value={distance} onChange={(e) => handleInputChange(e)}/>
                        <Form.Text className="text-danger">
                            { validation['distance']? "Enter the distance of partners from venue." : ''}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="forDistanceUnits">
                        <Form.Label>Distance Units</Form.Label>
                        <Form.Check
                            type='radio'
                            name="units"
                            value='KM'
                            checked={unit === 'KM'}
                            label='Kilometer'
                            onChange={(e) => handleInputChange(e)}
                            id='forDistanceUnits' />
                        <Form.Check
                            type='radio'
                            name="units"
                            label='Miles'
                            value='ML'
                            onChange={(e) => handleInputChange(e)}
                            checked={unit === 'ML'}
                            id='forDistanceUnits' />
                        <Form.Text className="text-danger">
                            { validation['unit']? "Enter the distance of partners from venue." : ''}
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">Search Partners</Button>
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

export default InvitationPopup;