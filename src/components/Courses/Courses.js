import React from "react";
import { Container, Row } from "react-bootstrap";
import Course from "../course/Course.js";
import Bounce from "react-reveal/Bounce";
import useDcotors from "../../hooks/useDoctors.js";

const Courses = () => {
  const [courses] = useDcotors();
  return (
    <div
    >
      <Container className="py-5">
        <Bounce left cascade>
          <h2 className="text-center text-white mb-0">Our All Courses</h2>
        </Bounce>
        <Bounce right cascade>
          <p className="my-4 mt-2 text-center text-muted fs-5">
            Here you can find our all latest courses. Choose some of them and try to grow up your skills.
          </p>
        </Bounce>
        <Row>
          {courses?.map((course) => (
            <Course course={course} key={course.key}></Course>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
