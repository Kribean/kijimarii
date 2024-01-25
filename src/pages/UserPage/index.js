import { Badge, Card, Container } from "react-bootstrap";
import Header from "../../components/Header";
import ProfileCompletedComponent from "../../components/ProfileCompletedComponent";
import ModalFirstConnexion from "../../components/ModalFirstConnexion";
import { useState } from "react";
import FirstConnexionComponent from "../../components/FirstConnexionComponent";
import HeaderNoName from "../../components/HeaderNoName";

export default function UserPage() {
  const [showFirstConnexion, setShowFirstConnexion] = useState(true);
  const [nameUser, setNameUser] = useState("");
  return (
    <Container fluid>
      {nameUser.length > 2 ? (
        <>
          <Header isNameExisted={true} />
          <h1 className="display-4">Tableau de bord</h1>
          <ProfileCompletedComponent />

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
          <FirstConnexionComponent
            nameUser={nameUser}
            setNameUser={setNameUser}
          />
        </>
      )}
    </Container>
  );
}
