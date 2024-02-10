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
import { Link, useNavigate } from "react-router-dom";
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
        navigate("/");
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
                variant="secondary"
                className="my-4"
                onClick={() => {
                  handleGoToDashboard();
                }}
              >
                <p
                  style={{ fontSize: "42px" }}
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
              <Image src={mailSvg} width="24" height="24" alt="profil" />
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
          <Link
            className="btn btn-secondary"
            to="https://forms.gle/1uqYKdN2G8C7uB3k7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Supprimer mon profil
          </Link>
        </Col>
      </Row>

      <Row className="m-4">
        <Alert variant="info">
          <Alert.Heading>
            {userData?.tabInterested.length > 0
              ? "Hey, ça y'est!"
              : "Il n' y a pas encore de contacts"}
          </Alert.Heading>
          {userData?.tabInterested.length > 0 ? (
            <p>
              Dans la section mes contacts vous trouverez de nouvelles personnes
              intéréssés par ton profil
            </p>
          ) : (
            <p>
              Pour l'instant vous n'avez pas encore de contacts. Continuez à
              partager votre profil à vos ami(e)s de confiance, bienveillant.
              L'expérience continue.
            </p>
          )}
          <hr />
          {userData?.tabInterested.length > 0 ? (
            <Button
              onClick={() => {
                navigate("/list-contacts");
              }}
            >
              Mes contacts
            </Button>
          ) : (
            <Button
              onClick={() => {
                navigate("/user-send-request");
              }}
            >
              Partager mon profil
            </Button>
          )}
        </Alert>
      </Row>
    </>
  );
}
