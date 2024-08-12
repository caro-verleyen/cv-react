import React from "react";

import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaAngleRight,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-light">
        <div className="container">
          {/* section gauche */}
          <div className="row   ">
            <div className=" col-md-6 col-lg-3">
              <h1>John Doe</h1>
              <p className=" col py-4">
                40 Rue Laure Diebold <br />
                69009 Lyon, France <br />
                Téléphone:06 20 30 40 50
              </p>

              <div className="col  align-items-end style={{fa-5x}}" id="reseau">
                <FaTwitterSquare size={"2em"} />
                <FaGithubSquare size={"2em"} />
                <FaLinkedin size={"2em"} />
              </div>
            </div>

            {/* section droite */}

            <div className=" col-md-6 col-lg-3 ">
              <h5>Liens utiles</h5>
              <ul className="list-unstyled  ">
                <li className=" text-body ">
                  <a className="text-decoration-none text-body" href="/">
                    <FaAngleRight className="text-primary" />
                    Acceuil
                  </a>
                </li>
                <li className=" text-body">
                  <a className="text-decoration-none text-body" href="/">
                    <FaAngleRight className="text-primary" />A propos
                  </a>
                </li>
                <li className="text-body">
                  <a className="text-decoration-none text-body" href="/service">
                    <FaAngleRight className="text-primary" />
                    Services
                  </a>
                </li>
                <li className="text-body">
                  <a className="text-decoration-none text-body" href="/contact">
                    <FaAngleRight className="text-primary" />
                    Me contacter
                  </a>
                </li>
                <li className="text-body">
                  <a
                    className="text-decoration-none text-body"
                    href="/Accordeon"
                  >
                    <FaAngleRight className="text-primary" />
                    Mentions légales
                  </a>
                </li>
              </ul>
            </div>
            <div className=" col-md-6 col-lg-3 ">
              <h5>Mes dernières réalisations</h5>
              <ul className="list-unstyled">
                <li className="text-body">
                  <a
                    className="text-decoration-none text-body"
                    href="/Realisations"
                  >
                    <FaAngleRight className="text-primary" />
                    Fresh food
                  </a>
                </li>
                <li className="text-body">
                  <a
                    className="text-decoration-none text-body"
                    href="/Realisations"
                  >
                    <FaAngleRight className="text-primary" />
                    Restaurant Akira
                  </a>
                </li>
                <a
                  className="text-decoration-none text-body"
                  href="/Realisations"
                >
                  <FaAngleRight className="text-primary" />
                  Espace bien-etre
                </a>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 ">
              <h5>Mes derniers articles</h5>
              <ul className="list-unstyled">
                <li className="text-body">
                  <a className="text-decoration-none text-body" href="/Blog">
                    <FaAngleRight className="text-primary" />
                    Coder son site en HTML/CSS
                  </a>
                </li>
                <li className="text-body">
                  <a className="text-decoration-none text-body" href="/Blog">
                    <FaAngleRight className="text-primary" />
                    Vendre ses produits sur le web
                  </a>
                </li>
                <li className="text-body">
                  <a className="text-decoration-none text-body" href="/Blog">
                    <FaAngleRight className="text-primary" />
                    se positionner sur Google
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="text-center p-3 text-white
          "
          style={{ backgroundColor: "rgba(0, 0, 0,0.8)" }}
        >
          © 2020 Designed by John Doe
        </div>
      </footer>
    </>
  );
}
export default Footer;
