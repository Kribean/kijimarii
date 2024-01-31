import { Button, Image, Row, Col, Container } from "react-bootstrap";
import googleImg from "../../assets/google-svg.svg";
import doorPng from "../../assets/key.jpg";
import { useNavigate } from "react-router-dom";
import FirebaseAuthService from "../../FirebaseAuthService";
import FirebaseFirestoreService from "../../FirebaseFirestoreService";
import { useContext } from "react";
import UserContext from "../../UserContext";

export default function LoginPage() {
  const { userData, setUserData } = useContext(UserContext);

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/home-user");
  };
  async function handleLoginWithGoogle() {
    let response;
    try {
      response = await FirebaseAuthService.loginWithGoogle();

      const queries = [
        {
          field: "uidAuthor",
          condition: "==",
          value: response?.user.uid,
        },
      ];

      if (response?.user) {
        const responseUser = await FirebaseFirestoreService.readDocuments({
          collection: "userKijimarii",
          queries: queries,
        });

        if (responseUser.docs.length === 0) {
          FirebaseFirestoreService.createDocument("userKijimarii", {
            uidAuthor: response?.user.uid,
            email: response?.user.email,
            age: null,
            description: "",
            isMan: null,
            name: "",
            codePostal: null,
            city: "",
            perimeter: 0,
            isSessionActive: true,
            photoUrl: null,
            tabHobbies: "",
            religion: "",
            isReligionRelevant: false,
            agePartnerMin: 35,
            agePartnerMax: 35,
            tabHumanValues: "",
            descriptionPartner: "",
          })
            .then(() => {
              handleNavigation();
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          handleNavigation();
        }
      }
    } catch (error) {
      alert(error.message);
    } finally {
      if (response?.user) {
        window.localStorage.setItem("kijimariiUid", response.user.uid);
      }
    }
  }
  FirebaseAuthService.subscribeToAuthChanges(setUserData);

  return (
    <Container
      fluid
      className="m-0 p-0 justify-content-center align-items-center"
    >
      {userData ? (
        <div className="bg-body-transp jumbotron jumbotron-fluid m-4 justify-content-center align-items-center m-4">
          <div className="container">
            <Row>
              <p className="lead">ça y 'est vous êtes connecté!</p>
              <Button
                variant="primary"
                onClick={() => {
                  handleNavigation();
                }}
              >
                Se connecter à mon espace
              </Button>
            </Row>
          </div>
        </div>
      ) : (
        <div className="bg-body-transp jumbotron jumbotron-fluid m-4">
          <div className="container">
            <Row>
              <h1 className="display-4">
                <span className="textWinterSoul">Kijimarii</span> - Connecter
                vous
              </h1>
              <p className="lead">
                faites le premier pas vers des rencontres authentiques et
                significatives. Laissez vos amis bienveillants vous guider vers
                une nouvelle manière de trouver l'amour.
              </p>
            </Row>
            <Row className="justify-content-center">
              <Image
                src={doorPng}
                style={{ width: "280px" }}
                alt="une porte et une clé"
                fluid
              />
            </Row>
            <Row className="justify-content-center">
              <Button
                style={{ width: "280px" }}
                variant="outline-dark"
                className="m-4"
                size="md"
                onClick={() => {
                  console.log("fuuton");
                  handleLoginWithGoogle();
                  //handleNavigation();
                }}
              >
                <Row className="justify-content-start align-items-center">
                  <Col xs="2">
                    <Image src={googleImg} fluid />
                  </Col>
                  <Col xs="10">
                    <p className="m-0"> Se connecter avec Google</p>
                  </Col>
                </Row>
              </Button>
            </Row>
          </div>
        </div>
      )}
    </Container>
  );
}
