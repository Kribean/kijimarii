import { Button, Col, ProgressBar, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ProfileCompletedComponent({
  percentageProfilCompleted,
}) {
  const navigate = useNavigate();
  const handleGoToProfile = () => {
    navigate("/profil");
  };
  const handleGoToShareProfil = () => {
    navigate("/user-send-request");
  };
  return (
    <Row className="m-4">
      <Row className="justify-content-center align-items-center">
        <Col xs={6}>
          <p className="lead">
            {" "}
            {percentageProfilCompleted < 100
              ? "Profil incomplet, n'oubliez pas de le compléter à 100%"
              : "Profil complété à 100%"}
          </p>
          <ProgressBar
            variant={percentageProfilCompleted < 100 ? "warning" : "succeed"}
            animated
            now={percentageProfilCompleted}
            label={Math.round(percentageProfilCompleted)}
          />
        </Col>
        <Col xs={6}>
          <Button
            className="m-4"
            variant="warning"
            onClick={() => {
              handleGoToProfile();
            }}
          >
            Modifier ou compléter mon profil
          </Button>
          <Button
            variant="success"
            onClick={() => {
              handleGoToShareProfil();
            }}
          >
            {" "}
            Partager le lien à mes ami(e)s
          </Button>
        </Col>
      </Row>
    </Row>
  );
}
