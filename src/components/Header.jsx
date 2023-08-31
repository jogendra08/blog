import {
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "../containers/bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
// import Image from "next/image";
// import img from "../assets/sai_logo.png";

const Header = () => {
  return (
    <>
      <div className="topBar">
        <div className="container-fluid contact">
          <div
            className="row"
            style={{ backgroundColor: "#000000", height: "30px" }}
          >
            <div className="text-center col-lg-4 col-md-4">
              <div className="contact-item">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#c5ccd7" }}
                />
                <span> </span>
                <a
                  href="mailto:sales@smartworldinsights.com"
                  // style={{ color: "#c5ccd7" ,textDecoration: 'none', borderBottom: "1px dashed #504c4c",}}
                >
                  sales@smartworldinsights.com
                </a>
              </div>
            </div>
            <div className="text-center col-lg-4 col-md-4">
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} style={{ color: "#c5ccd7" }} />
                <span> </span>
                <a
                  href="tel:+91-8005627811"
                  // style={{ color: "#c5ccd7", borderBottom: "1px dashed #504c4c", textDecoration: 'none' }}
                >
                  +91-8005627811&nbsp;
                </a>
                <span style={{ color: "#c5ccd7" }}>(India)</span>
              </div>
            </div>
            <div className="text-center col-lg-4 col-md-4">
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} style={{ color: "#c5ccd7" }} />
                <span> </span>
                <a
                  href="tel:+91-7742680702"
                  // style={{ color: "#c5ccd7", textDecoration: 'none', borderBottom: "1px dashed #504c4c", }}
                >
                  +91-7742680702&nbsp;
                </a>
                <span style={{ color: "#c5ccd7" }}>(India)</span>
              </div>
            </div>
            {/* <FontAwesomeIcon icon={faArrowAltCircleDown} /> */}
          </div>
        </div>
      </div>
      <Navbar id="navbar" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            {/* <Image
              src={img}
              alt="Picture of the author"
              width="50px"
              height="100px"
            /> */}
          </Navbar.Brand>
          {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
          <Navbar.Toggle />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 navItem "
              // style={{ maxHeight: "100px" }}
              // navbarScroll
            >
              <NavDropdown
                title="Industry Expertise"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">
                  Industry Expertise
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Solutions" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/Solutions/syndicatereports">
                  Syndicate Reports
                </NavDropdown.Item>
                <NavDropdown.Item href="/Solutions/customizedreports">
                  Customized Reports
                </NavDropdown.Item>
                <NavDropdown.Item href="/Solutions/businessconsulting">
                  Business Consulting
                </NavDropdown.Item>
                <NavDropdown.Item href="/Solutions/databasesolutions">
                  Database Solutions
                </NavDropdown.Item>
                <NavDropdown.Item href="/Solutions/companyprofiles">
                  Company Profiles
                </NavDropdown.Item>
                <NavDropdown.Item href="/Solutions/itsolutions">
                  IT Solutions
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="About Us" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Insights" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">
                  Research Insights
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Ongoing Reports
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Case Studies
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">Press Room</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Blogs</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#aimbox">AIM Box</Nav.Link>
              <Nav.Link href="#contactus">Contact Us</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
