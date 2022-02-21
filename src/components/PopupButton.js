import { Container, Button, Col, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PopupButton = ({ handlePopup }) => {
    return (
        <Container fluid>
            <Col className="d-grid justify-content-center">
                <ButtonGroup aria-label="Basic example">
                <Button variant="primary" onClick={() => handlePopup('searchForm')}>
                        <FontAwesomeIcon icon={['fa-solid', 'magnifying-glass']} className="me-3" />
                        Search Partners For Invitation
                    </Button>
                    <Button variant="secondary" onClick={() => handlePopup('sendForm')}>
                        <FontAwesomeIcon icon={['fa-solid', 'envelope']} className="me-3" />
                        Send Invitation
                    </Button>
                </ButtonGroup>
            </Col>
        </Container>
    );
}

export default PopupButton;