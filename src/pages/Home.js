import React from "react";
import hero from "../assets/hero-bg.jpg";
import Skills from "../components/skills.js";
import { FaArrowCircleUp } from "react-icons/fa";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <main>
      <section className=" position-relative" id="ctaction">
        <Container>
          <img
            className=" img-fluid position-absolute top-0 start-0 h-100 w-100  "
            src={hero}
            alt="image a propos"
            style={{ objectFit: "cover" }}
            id="hero"
          />
        </Container>
        <div className="container position-relative">
          <div
            className=" mx-auto text-center py-4  w-75 
           "
          >
            <h1 className="d-block text-white fercase fs-1 fw-bolder lh-lg ">
              Bonjour, je suis John Doe
            </h1>
            <h2 className="h2 text-white fs-5 fw-normal lh-lg ">
              Développeur web full stack
            </h2>
            <a className="btn btn-primary lh-lg" href="#">
              En savoir plus
            </a>
          </div>
        </div>
      </section>
      <Skills />

      <div className="align-items-start">
        <a href="#top">
          {" "}
          <FaArrowCircleUp style={{ width: "48px", height: "40px" }} />
        </a>
      </div>
    </main>
  );
}

export default Home;
