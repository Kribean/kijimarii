import { Container, Image, Row, Button } from "react-bootstrap";
import checkedSuccessSvg from "../../assets/checked-success.svg";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

export default function CreateProfilSuccessPage() {
  const navigate = useNavigate();
  const handleGoToShare = () => {
    navigate("/send-to-my-friends");
  };

  return (
    <Container fluid>
      <Header />
      <Row className="justify-content-center m-4">
        <Image src={checkedSuccessSvg} width={200} height={200} />
      </Row>
      <Row className="justify-content-center">
        <h1 className="display-4">ça y'est! Plus qu'une étape!</h1>
        <p className="lead">
          L'expérience commence bientôt... Afin que tes ami(e)s participe à
          notre méthode, nous aurions besoin que tu envoie des messages à tes
          ami(e)s. Si tu es d'accord clique sur le bouton valider.
        </p>
        <Button
          style={{ width: "200px" }}
          variant={"success"}
          size="md"
          onClick={() => {
            handleGoToShare();
          }}
        >
          Valider
        </Button>
      </Row>
    </Container>
  );
}
