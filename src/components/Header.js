import {
  Button,
  Image,
  Row,
  Col,
  OverlayTrigger,
  Popover,
  Alert,
} from "react-bootstrap";
import mailSvg from "../assets/mail-svg.svg";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseAuthService from "../FirebaseAuthService";
import UserContext from "../UserContext";
import FirebaseFirestoreService from "../FirebaseFirestoreService";

export default function Header() {
  const {
    userData,
    setUserData,
    setUserDataId,
    userDataId,
    setPercentageProfilCompleted,
  } = useContext(UserContext);
  const [popoverMyContacts, setPopoverMyContacts] = useState(false);
  const [popoverMyMails, setPopoverMyMails] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.localStorage.getItem("kijimariiUid")) {
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
          const dataForm = data.docs[0].data();
          setUserData(dataForm);
          setUserDataId(data.docs[0].id);
          let score = 0;

          //check name
          if (dataForm.name) {
            if (dataForm.name.length >= 3) {
              score++;
            }
          }
          //check age
          if (dataForm.age) {
            if (dataForm?.age >= 18) {
              score++;
            }
          }
          //check codePostal
          if (dataForm.codePostal) {
            if (dataForm?.codePostal < 98000 && dataForm?.codePostal >= 1) {
              score++;
            }
          }
          //check description
          if (dataForm.description) {
            if (dataForm?.description.length > 10) {
              score++;
            }
          }
          //check isMan

          if (typeof dataForm?.isMan === "boolean") {
            score++;
          }

          //check descriptionPartner
          if (dataForm?.descriptionPartner) {
            if (dataForm?.descriptionPartner.length >= 10) {
              score++;
            }
          }

          //check human value
          if (dataForm?.tabHumanValues) {
            if (dataForm?.tabHumanValues.length >= 5) {
              score++;
            }
          }
          setPercentageProfilCompleted((score * 100) / 7);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    setTimeout(() => {
      setPopoverMyMails(true);
      setPopoverMyContacts(true);
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGoToListContact = () => {
    navigate("/list-contacts");
  };
  const handleGoToMsg = () => {
    navigate("/messanger");
  };
  const handleGoToDashboard = () => {
    navigate("/home-user");
  };
  function handleLogout() {
    FirebaseAuthService.logoutUser()
      .then(() => {
        setUserData(null);
        setUserDataId(null);
        localStorage.removeItem("kijimariiUid");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleChangeStatusFirstConnexion = () => {
    const dataForm = {
      showFirstConnexion: false,
    };
    FirebaseFirestoreService.updateDocument(
      "userKijimarii",
      userDataId,
      dataForm
    )
      .then(() => {
        console.log("succeed");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (popoverMyMails && popoverMyContacts) {
      handleChangeStatusFirstConnexion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [popoverMyMails, popoverMyContacts]);

  return (
    <>
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
            <Col md={8} xs={12}>
              <OverlayTrigger
                show={popoverMyContacts && userData?.showFirstConnexion}
                defaultShow={userData?.showFirstConnexion}
                trigger={["hover", "click"]}
                delay={0}
                placement="bottom"
                overlay={
                  <Popover
                    id="popover-basic"
                    style={{ zIndex: 50 }}
                    onClick={() => {
                      setPopoverMyContacts(false);
                    }}
                  >
                    <Popover.Header as="h3">Aide: Mes contacts</Popover.Header>
                    <Popover.Body>
                      Dans cette section vous trouverez tous les contacts qui
                      ont accepté de vous rencontrer
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button
                  className="m-4"
                  onClick={() => handleGoToListContact()}
                  variant="primary"
                >
                  Mes contacts
                </Button>
              </OverlayTrigger>
            </Col>
          </Row>
        </Col>
        <Col md={6} xs={12}>
          <OverlayTrigger
            show={popoverMyMails && userData?.showFirstConnexion}
            trigger={["hover", "click"]}
            defaultShow={userData?.showFirstConnexion}
            placement="auto-start"
            delay={0}
            overlay={
              <Popover
                id="popover-basic-2"
                style={{ zIndex: 50 }}
                onClick={() => {
                  setPopoverMyMails(false);
                }}
              >
                <Popover.Header as="h3">Aide: Messagerie</Popover.Header>
                <Popover.Body>
                  Dans cette section vous trouverez toutes vos discussions
                </Popover.Body>
              </Popover>
            }
          >
            <Button
              variant="primary"
              className="m-4"
              onClick={() => {
                handleGoToMsg();
              }}
            >
              <Image src={mailSvg} width="24" height="24" alt="" />
              <span className="badge badge-primary">Chat</span>
            </Button>
          </OverlayTrigger>
          {!userData ? (
            <Button
              variant="success"
              className="m-4"
              onClick={() => {
                navigate("/signin");
              }}
            >
              Se connecter
            </Button>
          ) : (
            <Button
              onClick={() => {
                handleLogout();
              }}
              className="m-4"
              variant={"danger"}
            >
              Se déconnecter
            </Button>
          )}
        </Col>
      </Row>
      {userData?.tabInterested.length > 0 && (
        <Row className="m-4">
          <Alert variant="info">
            <Alert.Heading>Hey, ça y'est!</Alert.Heading>
            <p>
              Dans la section mes contacts vous trouverez de nouvelles personnes
              intéréssés par ton profil
            </p>
            <hr />
            <Button>Mes contacts</Button>
          </Alert>
        </Row>
      )}
    </>
  );
}
