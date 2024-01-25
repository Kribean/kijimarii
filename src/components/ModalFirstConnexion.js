import { Button, Modal, Image, FloatingLabel, Form } from "react-bootstrap";
import bookPng from "../assets/book.jpg";
import { useState } from "react";

export default function ModalFirstConnexion(props) {
  const [name, setName] = useState("");
  const handleRegister = () => {
    console.log("enregistrer nom", name);
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Pour votre première connexion, pouvez-vous nous renseigner votre
          prénom:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image width={72} src={bookPng} fluid />
        <FloatingLabel
          controlId="floatingTextarea"
          label="Prénom"
          className="mb-3"
        >
          <Form.Control as="textarea" placeholder="Quel est votre prénom?" />
        </FloatingLabel>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            handleRegister();
          }}
        >
          Valider
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
