import React from "react";
import banner from "../assets/banner.jpg";
import { FaSearchDollar, FaFileCode, FaTv } from "react-icons/fa";

function Services() {
  return (
    <main>
      <section>
        <img
          src={banner}
          alt="image bleue"
          className="img-fluid position-static top-0 start-0 h-10 w-100"
          style={{
            objectFit: "cover",
            height: "150px",
          }}
        />
        <h1 className="text-center ">MON OFFRE DE SERVICES</h1>
        <p className="text-center ">
          Voici les prestations sur lesquelles je peux intervenir
        </p>
        <hr
          className="mx-auto border-bottom border-primary lh-lg"
          style={{ size: "4", width: 300 }}
        />
      </section>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="container-fluid">
              <div class="row gy-3 gy-md-4">
                <div class="col-12 col-lg-4">
                  <div class="card border shadow-sm">
                    <div class="mx-auto pt-4 text-primary">
                      <FaTv style={{ width: "48px", height: "48px" }} />
                    </div>
                    <div class="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center align-items-center">
                      <div>
                        <h4 class="mb-1 text-center">UX DESIGN</h4>
                        <p class="m-0 text-secondary">
                          L'UX Design est une méthode de conception centrée sur
                          l'utilisateur. Son but est d'offrir une expérience de
                          navigation optimale à l'internaute.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-4">
                  <div class="card border shadow-sm">
                    <div class="mx-auto pt-4 text-primary">
                      <FaFileCode style={{ width: "48px", height: "48px" }} />
                    </div>
                    <div class="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center align-items-center">
                      <div>
                        <h4 class="mb-1 text-center">DEVELOPPEMENT WEB</h4>
                        <p class="m-0 text-secondary">
                          Le développement de sites web repose sur l'utilisation
                          des langages HTML, CSS, Javascript et PHP
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-4">
                  <div class="card border shadow-sm mb-5">
                    <div class=" text-primary mx-auto pt-4 ">
                      <FaSearchDollar
                        style={{ width: "48px", height: "48px" }}
                      />
                    </div>
                    <div class="card-body p-3 p-md-4 p-xxl-5 d-flex   mx-auto">
                      <div>
                        <h4 class="mb-1 text-center ">REFERENCEMENT</h4>
                        <p class="m-0 text-secondary ">
                          Le référencement naturel d'un site, aussi appelé SEO,
                          consiste à mettre des techniques en oeuvre pour
                          améliorer sa position dans les résultats des moeteurs
                          de recherche
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Services;
