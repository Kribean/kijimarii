import { Button, Image, Row, Col, Container } from "react-bootstrap";
import googleImg from "../../assets/google-svg.svg";
import doorPng from "../../assets/key.jpg";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

export default function LoginPage() {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/home-user");
  };
  return (
    <Container
      fluid
      className="m-0 p-0 justify-content-center align-items-center"
    >
      <div className="bg-body-transp jumbotron jumbotron-fluid m-4">
        <div className="container">
          <Row>
            <h1 className="display-4">
              <span className="textWinterSoul">Kijimarii</span> - Connecter vous
            </h1>
            <p className="lead">
              faites le premier pas vers des rencontres authentiques et
              significatives. Laissez vos amis bienveillants vous guider vers
              une nouvelle manière de trouver l'amour.
            </p>
          </Row>
          <Row className="justify-content-center">
            <Image
              src={doorPng}
              style={{ width: "280px" }}
              alt="une porte et une clé"
              fluid
            />
          </Row>
          <Row className="justify-content-center">
            <Button
              style={{ width: "280px" }}
              variant="outline-dark"
              className="m-4"
              size="md"
              onClick={() => {
                handleNavigation();
              }}
            >
              <Row className="justify-content-start align-items-center">
                <Col xs="2">
                  <Image src={googleImg} fluid />
                </Col>
                <Col xs="10">
                  <p className="m-0"> Se connecter avec Google</p>
                </Col>
              </Row>
            </Button>
          </Row>
        </div>
      </div>
    </Container>
  );
}
