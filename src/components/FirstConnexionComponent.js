import { Button, Image, FloatingLabel, Form, Row, Card } from "react-bootstrap";
import bookPng from "../assets/book.jpg";
import addFilePng from "../assets/add-file.png";
import { useState } from "react";

export default function FirstConnexionComponent({ nameUser, setNameUser }) {
  const handleRegister = () => {
    console.log("enregistrer nom", nameUser);
  };

  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
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

        <Row className="justify-content-center align-items-center m-0 p-0">
          <Card
            style={{ width: "18rem" }}
            className=" m-4 justify-content-center align-items-center"
          >
            {image && (
              <Card.Img style={{ width: "50%" }} width={24} src={image} />
            )}
            <Card.Body>
              <Card.Title>Ajouter une photo </Card.Title>
              <Form.Group className="btn btn-primary" controlId="formFile">
                <Form.Label> cliquer pour ajouter une image</Form.Label>
                <Form.Control
                  className="btn btn-primary"
                  type="file"
                  accept=".jpg,.gif,.png"
                  multiple
                  onChange={handleImageChange}
                />
              </Form.Group>
            </Card.Body>
          </Card>
        </Row>

        <Form.Group className="m-4" controlId="formBasicFirstName">
          <FloatingLabel
            controlId="floatingInputGrid"
            label="Entrer votre prénom"
          >
            <Form.Control
              type="text"
              placeholder="Entrer votre prénom"
              value={nameUser}
              onChange={(e) => {
                setNameUser(e.target.value);
              }}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="m-4" controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Age" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form>
          <Form.Check
            reverse
            label="Je suis un homme"
            name="group1"
            type="radio"
            id="ichi"
          />
          <Form.Check
            reverse
            label="Je suis une femme"
            name="group1"
            type="radio"
            id="ni"
          />
        </Form>

        <Form.Text className="m-4 text-muted">Je recherche un homme.</Form.Text>

        <Form.Group className="m-4" controlId="formBasicPostalCode">
          <Form.Label>Code Postal</Form.Label>
          <Form.Control type="number" placeholder="Entrer votre code postale" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Control type="text" placeholder="Entrer votre ville" />
        </Form.Group>

        <Form.Group
          className="m-4"
          controlId="exampleForm.ControlSelfDescription"
        >
          <Form.Label>Description brève de soi</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="m-4" controlId="formBasicFirstName">
          <Form.Label>Centre d'intérêt ou loisirs</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrer vos centres d'intérêt ou loisirs"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="m-4" controlId="formBasicFirstName">
          <Form.Label>Religion (facultatif)</Form.Label>
          <Form.Control type="text" placeholder="Entrer votre religion " />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
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
