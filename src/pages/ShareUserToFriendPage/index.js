import {
  Container,
  Row,
  Image,
  Toast,
  ToastContainer,
  Button,
} from "react-bootstrap";

import ClipBoardComponent from "../../components/ClipBoardComponent";
import Header from "../../components/Header";
import jmsBondMan from "../../assets/james-bond-man.jpg";
import jmsBondWoman from "../../assets/james-bond-woman.jpg";
import { useState, useContext } from "react";
import UserContext from "../../UserContext";
import { useNavigate } from "react-router-dom";

export default function ShareUserToFriendPage() {
  const navigate = useNavigate();
  const { userData, percentageProfilCompleted } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const sendToFriendText = `Kijimarii l'expérience sociale grandeur nature. Kijimarii est une application qui tente à se passer des sites de rencontres. Pour se faire Kijimarii se forge sous l'hypothèse que les gens qui nous correspondre se trouve dans notre entourage ou dans l'entourage de nos amis. ${
    userData?.name
  } participe à cette expérience et à besoin de toi. Si tu trouve ce message c'est que tu es un ami(e) ou que tu es un(e) ami(e) d'ami(e) de ${
    userData?.name
  }. Ainsi nous aimerions que tu clique sur le lien suivant pour poursuivre l'expérience. ${
    process.env.REACT_APP_URL + "/friends-network/" + userData?.uidAuthor
  }`;

  return (
    <Container fluid>
      <Header />
      {percentageProfilCompleted === 100 ? (
        <>
          <Row>
            <h1 className="display-4">
              Ta dernière mission: Partage à tes ami(e)s
            </h1>
          </Row>
          <Row className="justify-content-center">
            <Image style={{ width: "300px" }} src={jmsBondMan} fluid />
            <Image style={{ width: "300px" }} src={jmsBondWoman} fluid />
          </Row>
          <Row>
            <p>
              Copiez le texte et envoyer le à vos ami(e)s en message privé via
              vos réseaux sociaux (Whatsapp, Télégramm,...) ou par mail.
              N'oubliez pas de dire à vos amis l'existence du message pour
              qu'ils ne le loupent pas.
            </p>
          </Row>
          <ClipBoardComponent content={sendToFriendText} setShow={setShow} />
          <ToastContainer
            position="top-center"
            className="p-3 fixed-top"
            style={{ zIndex: 999 }}
          >
            <Toast
              className="w-100 text-white"
              bg="success"
              onClose={() => setShow(false)}
              show={show}
              delay={3000}
              autohide
            >
              <Toast.Header closeButton={true}>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">C'est copié!</strong>
                <small className="text-muted">maintenant</small>
              </Toast.Header>
              <Toast.Body>
                ça y'est c'est copié vous pouvez le collez dans vos réseaux
                sociaux.
              </Toast.Body>
            </Toast>
          </ToastContainer>
        </>
      ) : (
        <>
          <p className="lead">Oups! Votre profil n'est pas complété à 100%</p>
          <Button
            variant="warning"
            onClick={() => {
              navigate("/home-user");
            }}
          >
            Compléter mon profil
          </Button>
        </>
      )}
    </Container>
  );
}
