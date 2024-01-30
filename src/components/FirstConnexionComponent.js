import {
  Button,
  Image,
  FloatingLabel,
  Form,
  Row,
  Card,
  Badge,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import bookPng from "../assets/book.jpg";
import { useState } from "react";

export default function FirstConnexionComponent({ nameUser, setNameUser }) {
  const handleRegister = () => {
    console.log("enregistrer nom", nameUser);
  };

  const [showToast, setShowToast] = useState(false);
  const [image, setImage] = useState(null);
  const [age, setAge] = useState();
  const [description, setDescription] = useState("sdkjfhqsldjfklmqjmsfk");
  const [isMan, setIsMan] = useState();
  const [name, setName] = useState("");
  const [codePostal, setCodePostal] = useState();
  const [city, setCity] = useState("");
  const [perimeter, setPerimeter] = useState(0);
  const [photoUrl, setPhotoUrl] = useState("");
  const [tabHobbies, setTabHobbies] = useState("");
  const [religion, setReligion] = useState("");
  const [isReligionRelevant, setIsReligionRelevant] = useState(false);
  const [agePartnerMin, setAgePartnerMin] = useState(35);
  const [agePartnerMax, setAgePartnerMax] = useState(35);
  const [descriptionPartner, setDescriptionPartner] = useState("");

  const handleRadioChangeGender = (event) => {
    setIsMan(event.target.value);
  };
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

  const handleSubmit = (e) => {};

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

        <Form onSubmit={handleSubmit}>
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
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="m-4" controlId="formBasicAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              type="number"
              placeholder="Age"
              min={18}
              max={88}
            />
            <Form.Text className="text-muted text-danger">
              Vous devez avoir 18 ans ou plus
            </Form.Text>
          </Form.Group>

          <Form.Group className="bg-dark m-4 p-4 text-white">
            <Form.Check
              label="Je suis un homme"
              name="group1"
              type="radio"
              //value={true}
              //onChange={handleRadioChangeGender}
              onChange={() => setIsMan(true)}
              checked={isMan === true}
            />
            <Form.Check
              label="Je suis une femme"
              name="group1"
              type="radio"
              //value={false}
              //onChange={handleRadioChangeGender}
              onChange={() => setIsMan(false)}
              checked={isMan === false}
            />
          </Form.Group>
          <Row className="justify-content-center">
            <Badge bg="success" className="text-white">
              {isMan === false && (
                <Form.Text
                  style={{ fontSize: "14px" }}
                  className="m-4 text-bold h1 text-white text-wrap"
                >
                  🧔 Je recherche un homme.
                </Form.Text>
              )}
              {isMan && (
                <Form.Text
                  style={{ fontSize: "14px" }}
                  className="m-4 text-bold h1 text-white text-wrap"
                >
                  👩 Je recherche une femme.
                </Form.Text>
              )}
            </Badge>
          </Row>

          <Form.Group className="m-4" controlId="formBasicPostalCode">
            <Form.Label>Code Postal</Form.Label>
            <Form.Control
              type="number"
              value={codePostal}
              onChange={(e) => {
                setCodePostal(e.target.value);
              }}
              placeholder="Entrer votre code postale"
            />
          </Form.Group>

          <Form.Group className="m-4" controlId="formBasicPostalCode">
            <Form.Label>Votre ville</Form.Label>
            <Form.Control
              type="text"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              placeholder="Entrer votre ville"
            />
          </Form.Group>

          <Form.Group
            className="m-4"
            controlId="exampleForm.ControlSelfDescription"
          >
            <Form.Label>Description brève de soi</Form.Label>
            <Form.Control
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <Form.Group className="m-4" controlId="formBasicFirstName">
            <Form.Label>Centre d'intérêt ou loisirs</Form.Label>
            <Form.Control
              type="text"
              value={tabHobbies}
              onChange={(e) => {
                setTabHobbies(e.target.value);
              }}
              placeholder="Entrer vos centres d'intérêt ou loisirs"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="m-4" controlId="formBasicFirstName">
            <Form.Label>Religion (facultatif)</Form.Label>
            <Form.Control type="text" placeholder="Entrer votre religion " />
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              onChange={() => {
                setIsReligionRelevant(!isReligionRelevant);
              }}
              label={
                isReligionRelevant
                  ? "Avoir une croyance est important pour moi"
                  : "Avoir une croyance n'est important pour moi"
              }
            />
          </Form.Group>

          <Row className="justify-content-end m-4">
            <Button
              className="w-25"
              onClick={() => {
                setShowToast(true);
                handleRegister();
              }}
            >
              Valider
            </Button>
          </Row>
        </Form>
      </div>
      <ToastContainer
        position="top-center"
        className="p-3 fixed-top"
        style={{ zIndex: 999 }}
      >
        <Toast
          className="w-100 text-white"
          bg="danger"
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={5000}
          autohide
        >
          <Toast.Header closeButton={true}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">
              Oops! Il manque des informations
            </strong>
          </Toast.Header>
          <Toast.Body>
            <p>Il manque les informations suivantes:</p>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}
