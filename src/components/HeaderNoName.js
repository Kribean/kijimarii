import { Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FirebaseAuthService from "../FirebaseAuthService";
import UserContext from "../UserContext";
import { useContext, useEffect } from "react";
import FirebaseFirestoreService from "../FirebaseFirestoreService";

export default function HeaderNoName() {
  const { userData, setUserData, userDataId, setUserDataId } =
    useContext(UserContext);
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate("/home-user");
  };
  function handleLogout() {
    FirebaseAuthService.logoutUser()
      .then(() => {
        setUserData(null);
        setUserDataId(null);
        localStorage.removeItem("kijimariiUid");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (window.localStorage.getItem("kijimariiUid")) {
      console.log("je suis rentré dans le truc");
      const queries = [
        {
          field: "uidAuthor",
          condition: "==",
          value: window.localStorage.getItem("kijimariiUid"),
        },
      ];
      FirebaseFirestoreService.readDocuments({
        collection: "userKijimarii",
        queries: queries,
      })
        .then((data) => {
          setUserData(data.docs[0].data());
          setUserDataId(data.docs[0].id);
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
          <Button
            variant="dark"
            onClick={() => {
              handleGoToDashboard();
            }}
          >
            <p style={{ fontSize: "72px" }} className="lead m-0 textWinterSoul">
              Kijimarii
            </p>
          </Button>
        </Row>
      </Col>
      <Col md={6} xs={12}>
        {userData ? (
          <Button
            className="m-4"
            variant={"danger"}
            onClick={() => {
              handleLogout();
            }}
          >
            Se déconnecter
          </Button>
        ) : (
          <Button
            variant="success"
            className="m-4"
            onClick={() => {
              navigate("/signin");
            }}
          >
            Se connecter
          </Button>
        )}
      </Col>
    </Row>
  );
}
