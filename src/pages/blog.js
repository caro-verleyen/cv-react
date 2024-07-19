import React from "react";
import banner from "../assets/banner.jpg";
import coder from "../assets/coder.jpg";
import croissance from "../assets/croissance.jpg";
import google from "../assets/google.jpg";
import screens from "../assets/screens.jpg";
import seo from "../assets/seo.jpg";
import mozaique from "../assets/mozaique.png";

function Blog() {
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
        <h1 className="text-center ">BLOG</h1>
        <p className="text-center ">
          Retrouvez ici quelques articles sur le développement web
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
                    <img src={coder} alt="image de code" />
                    <div class="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center align-items-center">
                      <div>
                        <h4 class="mb-1 text-center">
                          Coder son site en HTML/CSS
                        </h4>
                        <p class="m-0 text-secondary">
                          Some quick example text to build on the card title and
                          make up the bulk ok the card's content
                        </p>
                        <div>
                          <button
                            type="button"
                            class="btn btn-primary mb-2 mt-3  mx-auto  "
                          >
                            Lire la suite
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-light border-top">
                      <p className="mb-1 text-center">Publié le 22 Aout 2022</p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-4">
                  <div class="card border shadow-sm">
                    <img
                      src={croissance}
                      alt="image deplantes avec des pièces"
                    />
                    <div class="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center align-items-center">
                      <div>
                        <h4 class="mb-1 text-center">
                          Vendre ses produits sur le web
                        </h4>
                        <p class="m-0 text-secondary">
                          Some quick example text to build on the card title and
                          make up the bulk ok the card's content
                        </p>
                        <div>
                          <button
                            type="button"
                            class="btn btn-primary mb-2 mt-3  mx-auto  "
                          >
                            Lire la suite
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-light border-top">
                      <p className="mb-1 text-center">Publié le 20 Aout 2022</p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-4">
                  <div class="card border shadow-sm mb-5">
                    <img src={google} alt="image d'un ordinateur" />
                    <div class="card-body p-3 p-md-4 p-xxl-5 d-flex   mx-auto">
                      <div>
                        <h4 class="mb-1 text-center ">
                          Se positionner sur Google
                        </h4>
                        <p class="m-0 text-secondary ">
                          Some quick example text to build on the card title and
                          make up the bulk ok the card's content
                        </p>
                        <div>
                          <button
                            type="button"
                            class="btn btn-primary mb-2 mt-3  mx-auto  "
                          >
                            lire la suite
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-light border-top">
                      <p className="mb-1 text-center">Publié le 22 Aout 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="container-fluid">
              <div class="row gy-3 gy-md-4">
                <div class="col-12 col-lg-4">
                  <div class="card border shadow-sm">
                    <img
                      src={screens}
                      alt="image de plusieurs supports informatiques"
                    />
                    <div class="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center align-items-center">
                      <div>
                        <h4 class="mb-1 text-center">
                          Coder son site en responsive design
                        </h4>
                        <p class="m-0 text-secondary">
                          Some quick example text to build on the card title and
                          make up the bulk ok the card's content
                        </p>
                        <div>
                          <button
                            type="button"
                            class="btn btn-primary mb-2 mt-3  mx-auto  "
                          >
                            Lire la suite
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-light border-top">
                      <p className="mb-1 text-center">
                        Publié le 31 Juillet 2022
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-4">
                  <div class="card border shadow-sm">
                    <img src={seo} alt="image bleu seo" />
                    <div class="card-body p-3 p-md-4 p-xxl-5 d-flex justify-content-center align-items-center">
                      <div>
                        <h4 class="mb-1 text-center">
                          Techniques de référencement
                        </h4>
                        <p class="m-0 text-secondary">
                          Some quick example text to build on the card title and
                          make up the bulk ok the card's content
                        </p>
                        <div>
                          <button
                            type="button"
                            class="btn btn-primary mb-2 mt-3  mx-auto  "
                          >
                            Lire la suite
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-light border-top">
                      <p className="mb-1 text-center">
                        Publié le 30 Juillet 2022
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-4">
                  <div class="card border shadow-sm mb-5">
                    <img
                      src={mozaique}
                      alt="image mozaique de différentes compétences"
                    />
                    <div class="card-body p-3 p-md-4 p-xxl-5 d-flex   mx-auto">
                      <div>
                        <h4 class="mb-1 text-center ">Apprendre à coder</h4>
                        <p class="m-0 text-secondary ">
                          Some quick example text to build on the card title and
                          make up the bulk ok the card's content
                        </p>
                        <div>
                          <button
                            type="button"
                            class="btn btn-primary mb-2 mt-3  mx-auto  "
                          >
                            lire la suite
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-light border-top">
                      <p className="mb-1 text-center">
                        Publié le 12 Juillet 2022
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

export default Blog;
