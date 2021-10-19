import React from "react";
import useAuth from "./../hooks/useAuth.js";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

const Details = () => {
  const { key } = useParams();
  const { courses, addToCart } = useAuth();
  const matchingCourse = courses.find((course) => course.key === Number(key));
  return (
    <div className="my-4">
      {matchingCourse?.title ? (
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={6}>
              <img className="img-fluid" src={matchingCourse.img} alt="" />
            </Col>
            <Col md={6} className="d-flex justify-content-center flex-column">
              <h2>{matchingCourse.title}</h2>
              <h5>{matchingCourse.desc}</h5>
              <Row>
                <Col>
                  <h1>Consulting Fee: ${matchingCourse.price}</h1>
                  <div className="my-2">
                    <Rating
                      initialRating={matchingCourse.rating}
                      readonly
                      emptySymbol={
                        <FontAwesomeIcon
                          className="text-warning"
                          icon={emptyStar}
                        />
                      }
                      fullSymbol={
                        <FontAwesomeIcon
                          className="text-warning"
                          icon={fullStar}
                        />
                      }
                    />
                    <span> {matchingCourse.rating}</span>
                    <p className="mb-3">
                      Running Patient: {matchingCourse.ratingCount}
                    </p>
                    <button
                      onClick={() => addToCart(matchingCourse)}
                      className="btn btn-primary  w-100"
                    >
                      Take an Appointment
                    </button>
                  </div>
                </Col>
                <Col>
                  <div className="text-center">
                    <img
                      width="120px"
                      className="rounded-circle"
                      src={matchingCourse.sellerThumb}
                      alt=""
                    />
                    <h5>Appointment made by: {matchingCourse.provider}</h5>
                    <p className="mb-0">Reciptionist</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
          <div className="my-5 py-1">
            <h1 className="my-5 p-5 text-center">No Appointment taken</h1>
          </div>
        )}
    </div>
  );
};

export default Details;
