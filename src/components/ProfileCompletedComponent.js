import { Button, Col, ProgressBar, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ProfileCompletedComponent({
  percentageProfilCompleted,
}) {
  console.log("fuuton", percentageProfilCompleted);
  const navigate = useNavigate();
  const handleGoToProfile = () => {
    navigate("/profil");
  };
  const handleGoToShareProfil = () => {
    navigate("/user-send-request");
  };
  return (
    <Row>
      <p className="lead"> Profil non créé</p>
      <Row className="justify-content-center align-items-center">
        <Col xs={6}>
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
            Créer mon profil
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
