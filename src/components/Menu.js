import { Link } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";

const Menu = () => {
  return (
    <Container>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center col-sm-3 col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          Home
        </Link>
        <Nav>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/about" className="nav-link px-2 link-secondary">
                About
              </Link>
            </li>
            <li>
              <Link to="/page" className="nav-link px-2 link-secondary">
                Page 
              </Link>
            </li>
          </ul>
        </Nav>
      </header>
    </Container>
  );
};

export default Menu;
