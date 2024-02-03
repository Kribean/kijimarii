import {
  Button,
  Container,
  Row,
  Image,
  Badge,
  Accordion,
  Col,
} from "react-bootstrap";
import googleImg from "../../assets/google-svg.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserCardComponent from "../../components/UserCardComponent";
import doorPng from "../../assets/key.jpg";
import HeaderFriend from "../../components/HeaderFriend";
import ModalChart from "../../components/ModalChart";
import FinishComponent from "../../components/FinishComponent";
import { useContext } from "react";
import UserContext from "../../UserContext";
import FirebaseAuthService from "../../FirebaseAuthService";

export default function ShareToKindredPage() {
  const { emitterData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/home-user/?uuid=5646-e");
  };

  const [modalShow, setModalShow] = useState(false);
  const [nextPage, setNextPage] = useState(false);

  async function handleLoginWithGoogle() {
    try {
      const response = await FirebaseAuthService.loginWithGoogle();
      if (response?.user) {
        handleNavigation();
      }
    } catch (error) {
      alert(error.message);
    }
  }
  FirebaseAuthService.subscribeToAuthChanges(setUserData);

  return (
    <Container
      className="bg-box justify-content-center align-items-center"
      fluid
    >
      <HeaderFriend />
      {emitterData?.isSessionActive ? (
        <>
          {!nextPage ? (
            <div className="bg-body-transp jumbotron jumbotron-fluid m-4">
              <div className="container">
                <h1 className="display-4">Kijimarii</h1>
                <p className="lead">
                  Bienvenue sur la page de mise en contact Kijimarii ! Si vous
                  avez reçu ce lien, c'est parce qu'un(e) ami(e) pense que vous
                  pourriez faire une belle rencontre sur notre plateforme.
                  Découvrez ce que Kijimarii peut vous offrir.
                </p>

                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <Badge bg="info">Qu'est ce que Kijimarii?</Badge>
                    </Accordion.Header>
                    <Accordion.Body>
                      Kijimarii réinvente les rencontres en redonnant une touche
                      d'authenticité. Notre objectif est de s'éloigner des
                      applications de rencontres traditionnelles, souvent source
                      de désagréments tels que les abonnements forcés, les
                      rencontres décevantes, l'addiction au swipe, et de revenir
                      à une approche plus traditionnelle, où les bonnes
                      rencontres se font par le biais des amis et des amis
                      d'amis, dans une atmosphère bienveillante.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <h2 className="h2 my-4">Le Profil de Mon Ami(e) :</h2>
                <UserCardComponent />
                <h2 className="h2">Prêt(e) à discuter?</h2>
                <Button
                  onClick={() => {
                    setModalShow(true);
                  }}
                  variant="success"
                >
                  Cliquer ici
                </Button>
              </div>
            </div>
          ) : (
            <div className="bg-body-transp jumbotron jumbotron-fluid m-4">
              <div className="container">
                <h1 className="display-4">Kijimarii</h1>
                <p className="lead">
                  Bienvenue sur la page de mise en contact Kijimarii ! Si vous
                  avez reçu ce lien, c'est parce qu'un(e) ami(e) pense que vous
                  pourriez faire une belle rencontre sur notre plateforme.
                  Découvrez ce que Kijimarii peut vous offrir.
                </p>
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
                    size={"md"}
                    variant="primary"
                    className="w-25 my-4 mx-2"
                    onClick={() => {
                      setNextPage(false);
                    }}
                  >
                    Retour
                  </Button>

                  <Button
                    style={{ width: "280px" }}
                    variant="outline-dark"
                    size="md"
                    className="w-25 my-4 mx-2"
                    onClick={() => {
                      handleLoginWithGoogle();
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
          )}
          <ModalChart
            show={modalShow}
            onHide={() => {
              setNextPage(true);
              setModalShow(false);
            }}
          />
        </>
      ) : (
        <FinishComponent />
      )}
    </Container>
  );
}
