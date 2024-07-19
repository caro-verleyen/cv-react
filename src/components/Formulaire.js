import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState, useRef } from "react";

function Formulaire() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.target.reset();

    alert(`Message envoyé`);
  };

  const FormClear = useRef(null);
  const resetFormClear = () => {
    FormClear.current.reset();
  };

  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <h4 className="mt-5 fw-bold  border-bottom border-info lh-lg py-2">
        Formulaire de contact
      </h4>
      <Form onSubmit={handleSubmit} ref={FormClear} className="py-2">
        <input
          className="lh-lg form-control form-control mb-3"
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="lh-lg form-control form-control mb-3"
          type="email"
          name="email"
          placeholder="Votre mail"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="lh-lg form-control form-control mb-3"
          type="texte"
          name="phone"
          placeholder="Votre numéro de téléphone"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          className="lh-lg form-control form-control mb-3"
          type="text"
          name="sujet"
          placeholder="Sujet"
          value={formData.sujet}
          onChange={handleChange}
        />
        <textarea
          className="lh-lg form-control form-control mb-3"
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
        />
        <div class="text-center">
          <Button
            className="btn btn-primary center-block "
            type="submit"
            onclick={resetFormClear}
          >
            Envoyer
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Formulaire;
