import { Button, Image, FloatingLabel, Form, Row } from "react-bootstrap";
import bookPng from "../assets/book.jpg";

export default function FirstConnexionComponent({ nameUser, setNameUser }) {
  const handleRegister = () => {
    console.log("enregistrer nom", nameUser);
  };

  return (
    <div className="bg-body-transp jumbotron jumbotron-fluid m-4">
      <div className="container ">
        <h1 className="display-4">
          Kijimarii Pour votre première connexion, pouvez-vous nous renseigner
          votre prénom:
        </h1>
        <Row className="justify-content-center align-items-center">
          <Image
            style={{ width: "300px" }}
            src={bookPng}
            fluid
            className="m-4"
          />
        </Row>

        <FloatingLabel
          controlId="floatingTextarea"
          label="Prénom"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            placeholder="Quel est votre prénom?"
            value={nameUser}
            onChange={(e) => {
              setNameUser(e.target.value);
            }}
          />
        </FloatingLabel>

        <Row className="justify-content-end m-4">
          <Button
            className="w-25"
            onClick={() => {
              handleRegister();
            }}
          >
            Valider
          </Button>
        </Row>
      </div>
    </div>
  );
}
