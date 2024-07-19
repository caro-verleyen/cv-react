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
            <div className="col-md-3">
              <h1>John Doe</h1>
              <p className=" col py-4">
                40 Rue Laure Diebold <br />
                69009 Lyon, France <br />
                Téléphone:06 20 30 40 50
              </p>

              <div className="col  align-items-end style={{fa-5x}}">
                <FaTwitterSquare size={"2em"} />
                <FaGithubSquare size={"2em"} />
                <FaLinkedin size={"2em"} />
              </div>
            </div>

            {/* section droite */}

            <div className="col-md-3  ">
              <h5>Liens utiles</h5>
              <ul className="list-unstyled  ">
                <li className=" text-body" href="/">
                  <FaAngleRight className="text-primary" />
                  Acceuil
                </li>
                <li className="text-body" href="/">
                  <FaAngleRight className="text-primary" />A propos
                </li>
                <li className="text-body" href="/Services">
                  <FaAngleRight className="text-primary" />
                  Services
                </li>
                <li className="text-body" href="/Contact">
                  <FaAngleRight className="text-primary" />
                  Me contacter
                </li>
                <li className="text-body" href="/accordeon">
                  <FaAngleRight className="text-primary" />
                  Mentions légales
                </li>
              </ul>
            </div>
            <div className="col-md-3 ">
              <h5>Mes dernières réalisations</h5>
              <ul className="list-unstyled">
                <li className="text-body" href="/Realisations">
                  <FaAngleRight className="text-primary" />
                  Fresh food
                </li>
                <li className="text-body" href="/Realisations">
                  <FaAngleRight className="text-primary" />
                  Restaurant akira
                </li>
                <li className="text-body" href="/Realisations">
                  <FaAngleRight className="text-primary" />
                  Espace bien-etre
                </li>
              </ul>
            </div>
            <div className="col-md-3 ">
              <h5>Mes derniers articles</h5>
              <ul className="list-unstyled">
                <li className="text-body" href="/Blog">
                  <FaAngleRight className="text-primary" />
                  Coder son site en HTML/CSS
                </li>
                <li className="text-body" href="/Blog">
                  <FaAngleRight className="text-primary" />
                  Vendre ses produits sur le web
                </li>
                <li className="text-body" href="/Blog">
                  <FaAngleRight className="text-primary" />
                  se positionner sur Google
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
