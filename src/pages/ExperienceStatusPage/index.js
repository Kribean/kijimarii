import { Button, Container, Row } from "react-bootstrap";
import Header from "../../components/Header";
import { useContext } from "react";

import UserContext from "../../UserContext";
import { useNavigate } from "react-router-dom";

export default function ExperienceStatusPage() {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);

  return (
    <Container fluid>
      <Header />
      <Row className="justify-content-center">
        <h1 className="display-4">Tableau de bord</h1>
      </Row>
      <p className="lead">
        ça y'est votre status à changer 😀.
        {userData.isSessionActive
          ? "Votre session est activée, ainsi votre profil sera visible"
          : "Votre session est désactivée, ainsi votre profil ne sera pas visible"}
      </p>
      <Button
        onClick={() => {
          navigate("/home-user");
        }}
      >
        Retour au tableau de bord
      </Button>
    </Container>
  );
}
