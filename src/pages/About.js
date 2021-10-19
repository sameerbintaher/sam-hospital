import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
const About = () => {
  return (
    <div
      className="py-5 bg-dark"
    >
      <Container>
        <Zoom>
          <h2 className="text-center text-white mb-4">
            WELCOME TO SAM HOSPITAL & DIAGNESTIC CENTER
          </h2>
        </Zoom>
        <Row>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-white">We Care For You</h5>
              <p className="text-muted">
                We place our patients and their needs in the center of all we do. SamHospital strives to always remain the most trusted partner in tomorrow’s healthcare industry. Our dedication to Quality, Customer Service, Innovation, Advanced Technology and Research is what separates us from our competition.
              </p>
              <p className="text-muted">
                As the first homegrown healthcare group in Bangladesh, CCLL was incorporated on 22nd February, 1984 and commenced operations as the country’s sole integrated investigative laboratory on 16th May, 1984 in Chittagong. It was a pioneering venture in the field of integrated and automated diagnostics in Bangladesh.

                SamHospitals comprehensive range of investigative services have played a crucial role in helping millions of patients obtaining proper diagnostic services since its inception. Derived from one the world’s largest catalog of clinical laboratory procedures, our diagnostic insights reveal new avenues to identify and treat diseases, inspire healthy behaviors and improve health care management.
              </p>
            </Bounce>
          </Col>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-white">Our Vision</h5>
              <p className="text-muted">
                SamHospital Clinical Lab annually serves one in three residents of Chittagong and more than three-fourths of the physicians in the region, and our 500 employees understand that, in the right hands and with the right context, our diagnostic insights can inspire actions that transform lives.
              </p>
              <h5 className="text-white">Our Mission</h5>
              <p className="text-muted">
                At present, SamHospital portfolio includes Clinical Laboratory Management, Healthcare Technical Services, Diagnostic Modality Development and Commissioning, Specialist Physician Consultation Services, modern Eye Hospital and Research Center and many more.
              </p>
            </Bounce>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md>
            <Bounce bottom>
              <h5 className="text-white">Sign up for our monthly newsletter</h5>
              <p className="text-muted">
                Be the first to know about news and updates.We never share you
                mail with others. Trust us!
              </p>
            </Bounce>
          </Col>
          <Col md className="d-flex align-items-center">
            <Bounce bottom>
              <Form className="w-100">
                <Form.Label className="text-white">
                  Leave your mail below
                </Form.Label>
                <Form.Group
                  className="d-flex text-white"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    style={{ background: "transparent", color: "white" }}
                    className="py-2 rounded-0"
                    type="email"
                    placeholder="Enter email"
                  />
                  <button
                    style={{ width: "150px" }}
                    className="btn rounded-3 ms-2 btn-primary"
                  >
                    SIGN UP
                  </button>
                </Form.Group>
              </Form>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
