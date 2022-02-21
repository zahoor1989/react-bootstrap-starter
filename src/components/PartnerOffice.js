import { Container, Table } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PartnerOffice = ({ offices }) => {
    const partnersOffices = offices && offices.map((office, index) => {
        const stringIndex = office.address.toLowerCase().split(",").join("-");
        const indexKey = `${index}-${stringIndex}`;
            return (
                <tr key={indexKey} >
                    <td>{index}</td>
                    <td>{office.address} </td>
                    <td>{office.location} </td>
                </tr>
         
            );
    })
    return (
        <Container fluid>
            <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th><FontAwesomeIcon icon={['fa-solid', 'location-dot']} className="me-3" />Location</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                    {partnersOffices}
                    </tbody>
                </Table>
        </Container>
    );
}

export default PartnerOffice;