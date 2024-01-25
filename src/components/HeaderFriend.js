import { Button, Row, Col } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

export default function HeaderFriend() {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate("/");
  };
  return (
    <Row className="bg-dark text-white text-center justify-content-center align-items-center">
      <Col md={6} xs={12}>
        <Row className="text-center justify-content-center align-items-center">
          <Col md={4} xs={12}>
            <Button
              variant="dark"
              onClick={() => {
                handleGoToDashboard();
              }}
            >
              <p
                style={{ fontSize: "72px" }}
                className="lead m-0 textWinterSoul"
              >
                Kijimarii
              </p>
            </Button>
          </Col>
          <Col md={8} xs={12}></Col>
        </Row>
      </Col>
      <Col md={6} xs={12}>
        <Button
          className="m-4"
          variant={"info"}
          onClick={() => {
            handleGoToDashboard();
          }}
        >
          Accueil
        </Button>
      </Col>
    </Row>
  );
}
