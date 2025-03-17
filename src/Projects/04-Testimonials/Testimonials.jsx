import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import Loading from "../components/Loading";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";

function Testimonials() {
  const testimonialTypes = ["Posts", "Users", "Comments"];
  const [testimonials, setTestimonials] = useState(testimonialTypes[0]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, [testimonials]);

  return (
    <div className="container">
      <Title title="Testimonials App" />

      <Button
        text="Posts"
        className="btn-primary ms-0"
        icon={<BsFillFileEarmarkPostFill />}
        onClick={() => setTestimonials("Posts")}
      />

      <Button
        text="Users"
        className="btn-success"
        icon={<FaUserAlt />}
        onClick={() => setTestimonials("Users")}
      />

      <Button
        text="Comments"
        className="btn-warning"
        icon={<BiCommentDetail />}
        onClick={() => setTestimonials("Comments")}
      />

      <Title
        className="subtitle primary"
        title={testimonials || "Select from above!"}
      />

      {items.length === 0 ? (
        <p>No data available for {testimonials}.</p>
      ) : (
        <div className="main-grid">
          {items.map((data) => (
            <div key={data.id} className="card">
              {data.title && data.title}
              {data.name && data.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Testimonials;
