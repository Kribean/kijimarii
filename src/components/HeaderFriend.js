import { useEffect, useContext } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FirebaseFirestoreService from "../FirebaseFirestoreService";
import UserContext from "../UserContext";

export default function HeaderFriend() {
  const { setEmitterData } = useContext(UserContext);
  const navigate = useNavigate();
  const { uid } = useParams();
  const handleGoToDashboard = () => {
    navigate("/");
  };
  useEffect(() => {
    if (uid) {
      const queries = [
        {
          field: "uidAuthor",
          condition: "==",
          value: uid,
        },
      ];
      FirebaseFirestoreService.readDocuments({
        collection: "userKijimarii",
        queries: queries,
      })
        .then((data) => {
          const dataForm = data.docs[0].data();
          setEmitterData(dataForm);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
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
