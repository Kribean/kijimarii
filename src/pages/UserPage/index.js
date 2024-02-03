import { Badge, Card, Container, Form, Row } from "react-bootstrap";
import Header from "../../components/Header";
import ProfileCompletedComponent from "../../components/ProfileCompletedComponent";
import { useContext, useEffect, useState } from "react";
import FirstConnexionComponent from "../../components/FirstConnexionComponent";
import HeaderNoName from "../../components/HeaderNoName";

import UserContext from "../../UserContext";
import FirebaseFirestoreService from "../../FirebaseFirestoreService";

export default function UserPage() {
  const { userData, userDataId, percentageProfilCompleted } =
    useContext(UserContext);
  const [experienceIsActive, setExperienceIsActive] = useState();

  const handleChangeStatusIsSession = () => {
    const dataForm = {
      isSessionActive: !userData?.isSessionActive,
    };
    FirebaseFirestoreService.updateDocument(
      "userKijimarii",
      userDataId,
      dataForm
    )
      .then(() => {
        console.log("aquiiiiii");
        setExperienceIsActive(!userData.isSessionActive);
      })
      .catch((error) => {
        console.log(
          "update isSession:",
          error,
          "userData?.isSessionActive: ",
          userData?.isSessionActive
        );
      });
  };
  useEffect(() => {
    setExperienceIsActive(userData?.isSessionActive);
  }, []);
  return (
    <Container fluid>
      {userData?.name ? (
        <>
          <Header />
          <Row className="justify-content-center">
            <h1 className="display-4">Tableau de bord</h1>
          </Row>
          <p className="lead">Bienvenue {userData.name} 😀</p>
          <Row className="align-self-center">
            {experienceIsActive + " :valeur bool: " + userData?.isSessionActive}
            <Form className="justify-content-center">
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label="Activé l'expérience"
                className="fs-4 mr-4"
                value={experienceIsActive}
                onChange={() => {
                  handleChangeStatusIsSession();
                }}
              />
            </Form>
          </Row>
          <ProfileCompletedComponent
            percentageProfilCompleted={percentageProfilCompleted}
          />

          <Card>
            <Card.Header>Partage de votre profil</Card.Header>
            <Card.Body>
              <Card.Title>Carring Mates</Card.Title>
              <Card.Text>
                Nombre d'ami(e)s attentionné(e)s qui partagent votre recherche
              </Card.Text>
              <Badge pill bg="success">
                18
              </Badge>
            </Card.Body>
          </Card>

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
                10
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
