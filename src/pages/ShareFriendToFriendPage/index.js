import { Container, Row } from "react-bootstrap";

import ClipBoardComponent from "../../components/ClipBoardComponent";
import Header from "../../components/Header";

export default function ShareFriendToFriendPage() {
  const sendToFriendText =
    "Kijimarii l'expérience sociale grandeur nature. Kijimarii est une application qui tente à se passer des sites de rencontres. Pour se faire Kijimarii se forge sous l'hypothèse que les gens qui nous correspondre se trouve dans notre entourage ou dans l'entourage de nos amis. [Nom prénom] participe à cette expérience et à besoin de toi. Si tu trouve ce message c'est que tu es un ami(e) ou que tu es un(e) ami(e) d'ami(e) de [nom prénom]. Ainsi nous aimerions que tu clique sur le lien suivant pour poursuivre l'expérience.";

  const sendToPotentialAmeSoeurText =
    "Kijimarii l'expérience sociale grandeur nature. Kijimarii est une application qui tente à se passer des sites de rencontres et promeux la bienveillance. Pour se faire Kijimarii se forge sous l'hypothèse que les gens qui nous correspondre se trouve dans notre entourage ou dans l'entourage de nos amis. [Nom prénom] pense que son ami(e) ou l'ami(e) d'un(e) ami(e) pourrait te correspondre. Pour poursuivre l'expérience et découvrir le profil clique sur le lien ci-dessous.";

  return (
    <Container fluid>
      <Header />
      <Row>
        <h1 className="display-4"> Partage à tes ami(e)s</h1>
      </Row>
      <ClipBoardComponent content={sendToFriendText} />
      <ClipBoardComponent content={sendToPotentialAmeSoeurText} />
    </Container>
  );
}
