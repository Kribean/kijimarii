import { Badge, Card, Container, Form, Row } from "react-bootstrap";
import Header from "../../components/Header";
import ProfileCompletedComponent from "../../components/ProfileCompletedComponent";
import { useContext, useState } from "react";
import FirstConnexionComponent from "../../components/FirstConnexionComponent";
import HeaderNoName from "../../components/HeaderNoName";

import UserContext from "../../UserContext";

export default function UserPage() {
  // eslint-disable-next-line no-unused-vars
  const [showFirstConnexion, setShowFirstConnexion] = useState(true);

  const { userData, percentageProfilCompleted } = useContext(UserContext);

  return (
    <Container fluid>
      {userData?.name ? (
        <>
          <Header isNameExisted={true} />
          <Row className="justify-content-center">
            <h1 className="display-4">Tableau de bord</h1>
          </Row>
          <p className="lead">Bienvenue {userData.name} 😀</p>
          <Row className="align-self-center">
            <Form className="justify-content-center">
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label="Activé l'expérience"
                className="fs-4 mr-4"
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
