import React from "react";
import { Container, Row } from "react-bootstrap";
import useAuth from "./../hooks/useAuth.js";
import Slide from "react-reveal/Slide";
import Course from "../components/course/Course.js";

const Courses = () => {
  const { courses } = useAuth();

  return (
    <div className="p-2 bg-dark">
      <div className="text-center text-white">
        <Slide left>
          <h1> Our Doctors</h1>
        </Slide>

        <Slide right>
          <p className="mb-0">
            Here you will get the best doctors in town.
          </p>
        </Slide>
      </div>

      <Container>
        <div className="my-3 d-flex flex-wrap justify-content-between ">
          <Row>
            {courses.map((course) => (
              <Course key={course.key} course={course} />
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Courses;
