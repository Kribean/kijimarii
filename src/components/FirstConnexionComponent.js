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
import { useState, useContext } from "react";
import FirebaseFirestoreService from "../FirebaseFirestoreService";
import UserContext from "../UserContext";

export default function FirstConnexionComponent() {
  const { userData, setUserData, userDataId } = useContext(UserContext);

  const [showToast, setShowToast] = useState(false);
  const [image, setImage] = useState(null);
  const [age, setAge] = useState(userData?.age);
  const [description, setDescription] = useState(userData?.description);
  const [isMan, setIsMan] = useState(userData?.isMan);
  const [name, setName] = useState(userData?.name);
  const [codePostal, setCodePostal] = useState(userData?.codePostal);
  const [city, setCity] = useState(userData?.city);
  const [perimeter, setPerimeter] = useState(userData?.perimeter);
  const [photoUrl, setPhotoUrl] = useState("");
  const [tabHobbies, setTabHobbies] = useState(userData?.tabHobbies);
  const [religion, setReligion] = useState(userData?.religion);
  const [isReligionRelevant, setIsReligionRelevant] = useState(
    userData?.isReligionRelevant
  );

  const [tabFormError, setTabFormError] = useState([]);

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

  const handleSubmit = () => {
    console.log(name, age, codePostal, description, codePostal);
    let tab = [];
    //check name
    if (name.length < 3) {
      tab = [...tab, "le prénom doit avoir plus de 2 lettres"];
    }
    //check age
    if (age < 18) {
      tab = [...tab, "Vous devez avoir plus de 18 ans"];
    }
    //check codePostal
    if (codePostal > 98000 || codePostal < 1) {
      tab = [...tab, "Donnez un code postal valide"];
    }
    //check description
    if (description.length < 10) {
      tab = [...tab, "Votre texte de description est trop court "];
    }
    //check isMan
    if (typeof isMan !== "boolean") {
      tab = [...tab, "Vous devez choisir si vous êtes un homme ou une femme "];
    }

    if (tab.length > 0) {
      setTabFormError(tab);
      setShowToast(true);
    } else {
      const dataForm = {
        age,
        description,
        isMan,
        name,
        codePostal,
        city,
        perimeter,
        tabHobbies,
        religion,
        isReligionRelevant,
      };
      FirebaseFirestoreService.updateDocument(
        "userKijimarii",
        userDataId,
        dataForm
      );
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

        <Form>
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
              label="🧔 Je suis un homme"
              name="group1"
              type="radio"
              //value={true}
              //onChange={handleRadioChangeGender}
              onChange={() => setIsMan(true)}
              checked={isMan === true}
            />
            <Form.Check
              label="👩 Je suis une femme"
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
            <Form.Label>Mon périmètre de rencontre: {perimeter} km</Form.Label>
            <Form.Range
              value={perimeter}
              max={2000}
              min={0}
              onChange={(e) => {
                setPerimeter(e.target.value);
              }}
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
            <Form.Label>Centre(s) d'intérêt ou loisirs</Form.Label>
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
            <Form.Control
              value={religion}
              onChange={(e) => setReligion(e.target.value)}
              type="text"
              placeholder="Entrer votre religion "
            />
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              onChange={() => {
                setIsReligionRelevant(!isReligionRelevant);
              }}
              label={
                isReligionRelevant
                  ? "Avoir une croyance est important pour moi"
                  : "Avoir une croyance n'est pas important pour moi"
              }
            />
          </Form.Group>

          <Row className="justify-content-end m-4">
            <Button
              className="w-25"
              onClick={() => {
                handleSubmit();
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
          bg={tabFormError.length > 0 ? "danger" : "success"}
          onClose={() => {
            console.log("sa ferme");
            setTabFormError([]);
            setShowToast(false);
          }}
          show={showToast}
          delay={10000}
          autohide
        >
          <Toast.Header closeButton={true}>
            <strong className="me-auto">
              {tabFormError.length > 0
                ? "Oops! Il manque des informations"
                : "Bienvenue sur Kijimarii"}
            </strong>
          </Toast.Header>
          <Toast.Body>
            {tabFormError.length > 0 ? (
              <>
                <p>Il manque les informations suivantes:</p>
                <ul className="list-group">
                  {tabFormError.map((element, index) => (
                    <li key={index} className="list-group-item">
                      {element}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <p>Génial votre compte est créé et actualisé!</p>
              </>
            )}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}
