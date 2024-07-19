import React from "react";
import japonnais from "../assets/japonnais.jpg";
import legumes from "../assets/legumes.jpg";
import zen from "../assets/zen.jpg";
import banner from "../assets/banner.jpg";

function Realisations() {
  return (
    <main>
      <section>
        <div className="max-height-10">
          <img
            src={banner}
            alt="image bleue"
            className="img-fluid position-static top-0 start-0   w-100 "
            style={{
              objectFit: "cover",
              height: "150px",
            }}
          />
        </div>
        <h1 className="text-center mt-5 ">PORTFOLIO</h1>
        <p className="text-center ">Voici quelques-unes de mes réalisations</p>
        <hr
          className="mx-auto border-bottom border-primary lh-lg"
          style={{ size: "10", width: 300 }}
        />
      </section>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="container-fluid">
              <div class="row gy-3 gy-md-4">
                <div class="col-12 col-lg-4">
                  <div class="card border shadow-sm">
                    <img src={legumes} alt="image de légumes" />
                    <div class="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center align-items-center">
                      <div>
                        <h4 class="mb-1 text-center">Fresh food</h4>
                        <p class="m-0 text-secondary">
                          Réalisation d'un site avec commande en ligne.
                        </p>
                        <div className="text-center">
                          <button
                            type="button"
                            class="btn btn-outline-primary mb-2 mt-3  mx-auto  "
                          >
                            voir
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-light border-top">
                      <p className="mb-1 text-center">
                        Site réalisé avec PHP et MySQL
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-4">
                  <div class="card border shadow-sm">
                    <img src={japonnais} alt="image sushis" />
                    <div class="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center align-items-center">
                      <div>
                        <h4 class="mb-1 text-center">Resaturant Akira</h4>
                        <p class="m-0 text-secondary">
                          Réalisation d'un site vitrine
                        </p>
                        <div className="text-center">
                          <button
                            type="button"
                            class="btn btn-outline-primary mb-2 mt-3  mx-auto  "
                          >
                            voir
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-light border-top">
                      <p className="mb-1 text-center">
                        Site réalisé avec WordPress
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-4">
                  <div class="card border shadow-sm mb-5">
                    <img src={zen} alt="image zen lotus" />
                    <div class="card-body p-3 p-md-4 p-xxl-5 d-flex   mx-auto">
                      <div>
                        <h4 class="mb-1 text-center ">Espace bien-etre</h4>
                        <p class="m-0 text-secondary ">
                          Réalisation d'un site vitrine pour un praticien de
                          bien-etre.
                        </p>
                        <div className="text-center">
                          <button
                            type="button"
                            class="btn btn-outline-primary mb-2 mt-3  mx-auto  "
                          >
                            voir
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-light border-top">
                      <p className="mb-1 text-center">
                        Site réalisé en HTML/CSS
                      </p>
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

export default Realisations;
