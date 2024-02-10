import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Header";
import ProfileCompletedComponent from "../../components/ProfileCompletedComponent";
import { useContext } from "react";
import FirstConnexionComponent from "../../components/FirstConnexionComponent";
import HeaderNoName from "../../components/HeaderNoName";

import UserContext from "../../UserContext";
import FirebaseFirestoreService from "../../FirebaseFirestoreService";
import { useNavigate } from "react-router-dom";

export default function UserPage() {
  const navigate = useNavigate();
  const { userData, userDataId, percentageProfilCompleted } =
    useContext(UserContext);

  const handleChangeStatusIsSession = () => {
    const dataForm = {
      isSessionActive: !userData.isSessionActive,
    };
    FirebaseFirestoreService.updateDocument(
      "userKijimarii",
      userDataId,
      dataForm
    )
      .then(() => {
        navigate("/experience-status");
      })
      .catch((error) => {
        console.log("update isSession:", error);
      });
  };
  return (
    <Container fluid>
      {userData?.name ? (
        <>
          <Header />
          <Row className=" justify-content-center">
            <h1 className="font-weight-bold">Tableau de bord</h1>
          </Row>
          <Row className="justify-content-center align-self-center border mx-4 py-2 bg-light rounded">
            <Col sm={6} md={8}>
              <p className="lead text-end">Bienvenue {userData.name} 😀</p>
            </Col>
            <Col sm={6} md={4}>
              <Button
                className="w-75"
                variant={userData.isSessionActive ? "success" : "danger"}
                onClick={() => {
                  handleChangeStatusIsSession();
                }}
              >
                {userData?.isSessionActive
                  ? "Expérience activée - Cliquer pour ❌ désactiver votre profil"
                  : "Expérience désactivée - Cliquer pour ✔️ activer votre profil"}
              </Button>
            </Col>
          </Row>
          <ProfileCompletedComponent
            percentageProfilCompleted={percentageProfilCompleted}
          />

          <Card className="my-4">
            <Card.Header>Attractivité de votre profil</Card.Header>
            <Card.Body>
              <Card.Title>Carring Mates</Card.Title>
              <Card.Text>
                Découvrez le nombre de personnes compatibles avec votre profil,
                qui sont des amis d'amis, créant ainsi des connexions
                potentielles au sein de votre cercle étendu.
              </Card.Text>
              <Badge pill bg="primary">
                {userData?.tabInterested.length}
              </Badge>
            </Card.Body>
          </Card>
        </>
      ) : (
        <>
          <HeaderNoName />
          <FirstConnexionComponent />
        </>
      )}
    </Container>
  );
}
