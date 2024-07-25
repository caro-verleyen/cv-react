import React from "react";
import {
  FaEnvelope,
  FaGlobe,
  FaMobileAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Accordeon() {
  return (
    <main>
      <section>
        <h1 className="text-center ">MENTIONS LEGALES</h1>

        <hr
          className="mx-auto border-bottom  lh-lg border-primary "
          style={{ height: "15 px", width: 300 }}
        />
        <div
          class="accordion row border shadow-lg mx-5 my-5 h-600"
          id="accordionExample"
        >
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Editeur du site
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <h1 className="w-full text-3xl lg:text-4xl xl:text-5xl font-bold text-[#00df9a]">
                  John Doe
                </h1>
                <p className=" col py-4">
                  <FaMapMarkerAlt />
                  40 Rue Laure Diebold <br />
                  69009 Lyon, France <br />
                  <p className="text-primary">
                    <FaMobileAlt className="text-body" />
                    06 20 30 40 50 <br />
                    <FaEnvelope className="text-body" />
                    john.doe@gmail.com
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Hébergeur
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <h1>Always Data</h1>
                <p className="col py-4">
                  91 rue du Faubourg Saint Honoré <br />
                  75008 Paris <br />
                  <p className="text-primary">
                    <FaGlobe className="text-body" /> www.alwaysdata.com
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Crédits
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <h1>Crédits</h1>
                <p>
                  Dite développé par John Doe,étudiant du CEF; <br />
                  Les images libres de droit sont issues du site{" "}
                  <p className="text-primary">pixabay</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Accordeon;
