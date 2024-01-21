import {
  Container,
  ProgressBar,
  Form,
  Button,
  Card,
  FloatingLabel,
  Row,
  Col,
} from "react-bootstrap";
import "./index.css";
import Header from "../../components/Header";
import addFilePng from "../../assets/add-file.png";
import { useNavigate } from "react-router-dom";

export default function ProfilPage() {
  const now = 60;
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/user-send-request");
  };
  return (
    <Container fluid>
      <Header />
      <Row className="m-4 text-center">
        <p className="lead p-0 m-0"> Ton proil doit être complété à 100%</p>
        <ProgressBar now={now} label={`${now}%`} />
      </Row>
      <Form
        className="m-0 p-0"
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <Row className="justify-content-center align-items-center m-0 p-0">
          <Card
            style={{ width: "18rem" }}
            className=" m-4 justify-content-center align-items-center"
          >
            <Card.Img style={{ width: "50%" }} width={24} src={addFilePng} />
            <Card.Body>
              <Card.Title>Ajouter une photo </Card.Title>
              <Form.Group className="btn btn-primary" controlId="formFile">
                <Form.Label> cliquer pour ajouter une image</Form.Label>
                <Form.Control
                  className="btn btn-primary"
                  type="file"
                  accept=".jpg,.gif,.png"
                  multiple
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
            <Form.Control type="text" placeholder="Entrer votre prénom" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="m-4" controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Age" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Text className="m-4 text-muted">
          Je recherche une femme.
        </Form.Text>
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

        <Form.Group className="m-4" controlId="formBasicAgeRange">
          <Form.Label>Tranche d'âge préférée du partenaire</Form.Label>
          <Row className="justify-content-center align-items-center text-center">
            <Col xs={5}>
              Minimum
              <input type="range" className="form-range" id="customRangeMax" />
            </Col>
            <Col xs={2}>35</Col>
            <Col xs={5}>
              Maximum
              <input type="range" className="form-range" id="customRangeMin" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="m-4" controlId="formBasicFirstName">
          <Form.Label>
            Quelles valeurs recherchez-vous chez votre partenaire ?
          </Form.Label>
          <Form.Control type="text" placeholder="Entrer votre religion " />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="m-4" controlId="formBasicAgeRange">
          <Form.Label>
            Jusqu'à quelle distance géographique recherchez-vous des personnes?
          </Form.Label>
          <input type="range" className="form-range" />
        </Form.Group>

        <Form.Group className="m-4" controlId="formBasicAgeRange">
          <Form.Label>
            Est-ce important pour vous que votre partenaire partage la même
            religion que vous?
          </Form.Label>
          <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"
            label="Check this switch"
          />
        </Form.Group>

        <Form.Group className="m-4" controlId="formBasicFirstName">
          <Form.Label>
            Bien que l'apparence ne soit pas le critère principal, nous
            aimerions mieux comprendre vos préférences. Quels sont les aspects
            physiques que vous trouvez importants chez un partenaire?
          </Form.Label>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </Form.Group>

        <Row className="m-0 p-4">
          <Button
            style={{ width: "200px", height: "72px" }}
            className="m-0 p-0"
            variant="primary"
            type="submit"
          >
            Envoyer vos informations
          </Button>
        </Row>
      </Form>
    </Container>
  );
}
