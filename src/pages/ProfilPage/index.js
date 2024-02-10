import {
  Button,
  FloatingLabel,
  Form,
  Row,
  Badge,
  Toast,
  ToastContainer,
  ProgressBar,
  Col,
} from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import FirebaseFirestoreService from "../../FirebaseFirestoreService";
import UserContext from "../../UserContext";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import ImageUploadPreview from "../../components/ImageUploadPreview";

export default function ProfilPage() {
  const navigate = useNavigate();

  const { userData, userDataId, percentageProfilCompleted } =
    useContext(UserContext);

  const [showToast, setShowToast] = useState(false);
  const [age, setAge] = useState(userData?.age);
  const [description, setDescription] = useState(userData?.description);
  const [isMan, setIsMan] = useState(userData?.isMan);
  const [name, setName] = useState("");
  const [codePostal, setCodePostal] = useState(userData?.codePostal);
  const [city, setCity] = useState(userData?.city);
  const [perimeter, setPerimeter] = useState(userData?.perimeter);
  const [imageUrl, setImageUrl] = useState("");
  const [tabHobbies, setTabHobbies] = useState(userData?.tabHobbies);
  const [religion, setReligion] = useState(userData?.religion);
  const [isReligionRelevant, setIsReligionRelevant] = useState(
    userData?.isReligionRelevant
  );
  const [agePartnerMin, setAgePartnerMin] = useState(userData?.agePartnerMin);
  const [agePartnerMax, setAgePartnerMax] = useState(userData?.agePartnerMax);
  const [tabHumanValues, setTabHumanValues] = useState(
    userData?.tabHumanValues
  );
  const [descriptionPartner, setDescriptionPartner] = useState(
    userData?.descriptionPartner
  );

  const [tabFormError, setTabFormError] = useState([]);

  const handleSubmit = () => {
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
    //check image
    if (!imageUrl) {
      tab = [...tab, "Il nous faudrait une photo"];
    }
    //check descriptionPartner
    if (descriptionPartner.length < 10) {
      tab = [
        ...tab,
        "Votre texte de description du/de la partenaire idéal(e) est trop court ",
      ];
    }

    //check human value
    if (tabHumanValues.length < 5) {
      tab = [
        ...tab,
        "Ajoutez des valeurs que vous souhaité(e) chez votre partenaire ",
      ];
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
        agePartnerMin,
        agePartnerMax,
        tabHumanValues,
        descriptionPartner,
        imageUrl,
      };
      FirebaseFirestoreService.updateDocument(
        "userKijimarii",
        userDataId,
        dataForm
      )
        .then(() => {
          navigate("/user-send-request");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (userData) {
      setAge(userData?.age);
      setDescription(userData?.description);
      setIsMan(userData?.isMan);
      setName(userData?.name);
      setCodePostal(userData?.codePostal);
      setCity(userData?.city);
      setPerimeter(userData?.perimeter);
      setImageUrl(userData?.imageUrl);
      setTabHobbies(userData?.tabHobbies);
      setReligion(userData?.religion);
      setIsReligionRelevant(userData?.isReligionRelevant);
      setAgePartnerMin(userData?.agePartnerMin);
      setAgePartnerMax(userData?.agePartnerMax);
      setTabHumanValues(userData?.tabHumanValues);
      setDescriptionPartner(userData?.descriptionPartner);
    }
  }, [userData]);
  return (
    <div className="bg-body-transp jumbotron jumbotron-fluid m-4">
      <div className="container ">
        <Header />
        <Row className="m-4 text-center">
          <p className="lead p-0 m-0"> Ton proil doit être complété à 100%</p>
          <ProgressBar
            variant={percentageProfilCompleted < 100 ? "warning" : "succeed"}
            animated
            now={percentageProfilCompleted}
            label={Math.round(percentageProfilCompleted)}
          />
        </Row>
        <Form>
          <Row className="text-center justify-content-center align-items-center m-0 p-0">
            <p className="text-bold">Ajouter une image de profil</p>
            <ImageUploadPreview
              basePath="userKijimarii"
              existingImageUrl={imageUrl}
              handleUploadFinish={(downloadUrl) => setImageUrl(downloadUrl)}
              handleUploadCancel={() => setImageUrl("")}
            />
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

          <Form.Group className="m-4" controlId="formBasicAgeRange">
            <Form.Label>Tranche d'âge préférée du partenaire</Form.Label>
            <Row className="justify-content-center align-items-center text-center">
              <Col xs={5}>
                Age Minimum souhaité: {agePartnerMin} ans
                <input
                  type="range"
                  className="form-range"
                  id="customRangeMin"
                  value={agePartnerMin}
                  onChange={(e) => {
                    setAgePartnerMin(e.target.value);
                  }}
                  min={18}
                  max={35}
                />
              </Col>
              <Col xs={2}>35</Col>
              <Col xs={5}>
                Age Maximum souhaité: {agePartnerMax} ans
                <input
                  type="range"
                  className="form-range"
                  id="customRangeMax"
                  value={agePartnerMax}
                  onChange={(e) => {
                    setAgePartnerMax(e.target.value);
                  }}
                  min={35}
                  max={88}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="m-4" controlId="formBasicFirstName">
            <Form.Label>
              Quelles valeurs recherchez-vous chez votre partenaire ?
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrer vos valeurs"
              value={tabHumanValues}
              onChange={(e) => {
                setTabHumanValues(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="m-4" controlId="formBasicFirstName">
            <Form.Label>
              Bien que l'apparence ne soit pas le critère principal, nous
              aimerions mieux comprendre vos préférences. Quels sont les aspects
              physiques que vous trouvez importants chez un partenaire?
            </Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Description">
              <Form.Control
                as="textarea"
                value={descriptionPartner}
                onChange={(e) => {
                  setDescriptionPartner(e.target.value);
                }}
                placeholder="Donnez nous votre description"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
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
