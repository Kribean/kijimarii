import { Container, Row, Image } from "react-bootstrap";

import ClipBoardComponent from "../../components/ClipBoardComponent";
import Header from "../../components/Header";
import jmsBondMan from "../../assets/james-bond-man.jpg";
import jmsBondWoman from "../../assets/james-bond-woman.jpg";

export default function ShareUserToFriendPage() {
  const sendToFriendText =
    "Kijimarii l'expérience sociale grandeur nature. Kijimarii est une application qui tente à se passer des sites de rencontres. Pour se faire Kijimarii se forge sous l'hypothèse que les gens qui nous correspondre se trouve dans notre entourage ou dans l'entourage de nos amis. [Nom prénom] participe à cette expérience et à besoin de toi. Si tu trouve ce message c'est que tu es un ami(e) ou que tu es un(e) ami(e) d'ami(e) de [nom prénom]. Ainsi nous aimerions que tu clique sur le lien suivant pour poursuivre l'expérience. https://google.com";

  return (
    <Container fluid>
      <Header />
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
          Copiez le texte et envoyer le à vos ami(e)s en message privé via vos
          réseaux sociaux (Whatsapp, Télégramm,...) ou par mail. N'oubliez pas
          de dire à vos amis l'existence du message pour qu'ils ne le loupent
          pas.
        </p>
      </Row>
      <ClipBoardComponent content={sendToFriendText} />
    </Container>
  );
}
