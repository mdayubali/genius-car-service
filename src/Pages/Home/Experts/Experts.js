import React from "react";
import { Container, Row } from "react-bootstrap";
import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";

const experts = [
  { id: 1, name: "Jon Sina", img: expert1 },
  { id: 2, name: "Will Smith", img: expert2 },
  { id: 3, name: "Dwane Rock", img: expert3 },
  { id: 4, name: "Tamim", img: expert4 },
  { id: 5, name: "Sakib", img: expert5 },
  { id: 6, name: "Miraz", img: expert6 },
];

const Experts = () => {
  return (
    <Container id="expert">
      <h3 className="text-center">Our Experts</h3>

      <Row>
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </Row>
    </Container>
  );
};

export default Experts;
