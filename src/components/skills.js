import React from "react";
import about from "../assets/about.jpg";

function Presentation() {
  return (
    <section className="container position-relative">
      <div className="row border shadow-lg mx-5 my-5 h-600 ">
        <div className="mt-0 mx-5 col w-25 p-3 h-75  ">
          <h4 className="mt-5 fw-bold  border-bottom border-info lh-lg ">
            A PROPOS
          </h4>
          <p className="fs-5 fw-medium lh-lg  ">
            {" "}
            Passionné par l'informatique et les nouvelles technologies, j'ai
            suivi une formation d' <strong>
              intégrateur-développeur web
            </strong>{" "}
            au CEF. Au cours de cette formation j'ai pu acquérir des bases
            solides pour travailler dans le domaine du{" "}
            <strong> dévelppement web</strong>. <br />
            Basé à Lyon, je suis en recherche d'une alternance au sein d'une
            agence digitale pour consolider ma formation de{" "}
            <strong> développeur web full stack</strong>. <br />
            J'accorde une attention particulière à la qualité du code que
            j'écris et je respecte les bonnes pratique du web.
          </p>
        </div>

        <div className="col my-5 ">
          <div className="col w-75 p-3">
            <div>
              <img
                src={about}
                alt="homme à barbe"
                className="img-fluid mt-5"
                style={{
                  objectFit: "cover",
                }}
              />
              <div className=" col lh-1 ">
                <h5 className="d-flex align-items-center mb-3 fw-bold fs-5">
                  Mes compétences
                </h5>
                <p>HTML5 90%</p>
                <div className="progress mb-3" style={{ height: "15px" }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
                <p>CSS3 80%</p>
                <div className="progress mb-3" style={{ height: "15px" }}>
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: " 80%" }}
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
                <p>JAVASCRIPT 70%</p>
                <div className="progress mb-3" style={{ height: " 15px" }}>
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "70%" }}
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
                <p>PHP 60%</p>
                <div className="progress mb-3" style={{ height: "15px" }}>
                  <div
                    class="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow={60}
                    aria-valuemin="0"
                    aria-valuemax={100}
                  ></div>
                </div>
                <p>REACT 50%</p>
                <div className="progress" style={{ height: "15px" }}>
                  <div
                    class="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function Skills() {
  return (
    <section>
      <Presentation />
    </section>
  );
}
