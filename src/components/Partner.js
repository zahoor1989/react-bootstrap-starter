import { Card, Container, Col, Row } from "react-bootstrap";
import PartnerOffice from '../components/PartnerOffice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Partner = ({ partners }) => {
    const mapppedPartners = partners && partners.map((partner, index) => {
        return (
        <Col xs="12" sm="6" md="6" lg="6" key={index}>
            <Card border="primary" key={index} className="m-2">
                <Card.Header as="h5" className="justify-content-center">
                    <FontAwesomeIcon icon={['fa-solid', 'handshake']} className="me-3"/>
                    {partner.organization}
                        </Card.Header>
                <Card.Body>
                    <Card.Title>
                        <FontAwesomeIcon icon={['fa-solid', 'location']} className="me-3" />
                                {partner.customerLocations}
                            </Card.Title>
                    <Card.Text>
                    <FontAwesomeIcon icon={['fa-solid', 'list-check']} className="me-3" /> {partner.services }
                    </Card.Text>
                    <Card.Text>
                    <FontAwesomeIcon icon={['fa-solid', 'earth-americas']} className="me-3" /> {partner.website}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <Card.Title className="text-center">
                        Office
                    </Card.Title>
                    <PartnerOffice offices={partner.offices}/>
                </Card.Footer>
            </Card>
        </Col>
        )
    });


    return (
        <Container>
            <Row className="justify-content-md-center">
                {mapppedPartners}
            </Row>
        </Container>
    );
};

export default Partner;
