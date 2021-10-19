import { useEffect, useState } from "react";

const useDcotors = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return { courses, setCourses };
};

export default useDcotors;
