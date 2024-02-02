import {
  Accordion,
  Badge,
  Container,
  Toast,
  ToastContainer,
} from "react-bootstrap";

import ClipBoardComponent from "../../components/ClipBoardComponent";
import { useState } from "react";
import UserCardComponent from "../../components/UserCardComponent";
import HeaderFriend from "../../components/HeaderFriend";
import FinishComponent from "../../components/FinishComponent";
import { useParams } from "react-router-dom";

export default function ShareFriendToFriendPage() {
  const { uid } = useParams();
  console.log(uid, "jhhhh");
  const [show, setShow] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [nameOfResearcher, setNameOfResearcher] = useState(" Emmanuel ");
  const url = "http://localhost:3000/friends-network";
  const url0 = "http://localhost:3000/interested";

  return (
    <Container
      className="bg-box justify-content-center align-items-center"
      fluid
    >
      <HeaderFriend />
      <div className="bg-body-transp jumbotron jumbotron-fluid m-4">
        <div className="container justify-content-center">
          <h1 className="display-4">Merci d'avoir Cliqué sur le Lien !</h1>
          <p className="lead">
            En cliquant sur ce lien, vous contribuez à aider Maxime à valider ou
            invalider une hypothèse intrigante : est-ce que 70% des bonnes
            rencontres se font réellement dans notre entourage, loin des sites
            de rencontres traditionnels ?
          </p>
          <div className="m-0 p-0 ">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <Badge bg="info">Qu'est ce que Kijimarii?</Badge>
                </Accordion.Header>
                <Accordion.Body>
                  Kijimarii réinvente les rencontres en redonnant une touche
                  d'authenticité. Notre objectif est de s'éloigner des
                  applications de rencontres traditionnelles, souvent source de
                  désagréments tels que les abonnements forcés, les rencontres
                  décevantes, l'addiction au swipe, et de revenir à une approche
                  plus traditionnelle, où les bonnes rencontres se font par le
                  biais des amis et des amis d'amis, dans une atmosphère
                  bienveillante.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <h2 className="h2 my-4">Le Profil de Mon Ami(e) :</h2>
          <UserCardComponent />

          <div className="mx-0 my-4 p-0 ">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h2 className="h5 my-4">Je connais quelqu'un</h2>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="lead">
                    Si vous connaissez quelqu'un qui pourrait être intéressé par
                    le profil de votre ami(e), partagez le texte ci-dessous avec
                    cette personne.
                  </p>
                  <ClipBoardComponent
                    content={`Salut, j’aide ${nameOfResearcher} à utiliser l’appli Kijimarii. Kijimarii est l'expérience sociale grandeur nature qui tente de se passer des sites de rencontres. Pour ce faire, Kijimarii se forge sous l'hypothèse que les gens qui nous correspondent se trouvent dans notre entourage ou dans l'entourage de nos amis. Si tu trouves ce message, c'est que je pense que le profil d’ ${nameOfResearcher} pourrait t’intéresser. Ainsi, pour en savoir plus,  cliques sur le lien suivant: ${url0}?uid=16836-e-686 `}
                    setShow={setShow}
                  />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <div className="mx-0 my-4 p-0 ">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h2 className="h5 my-4">
                    Partagez à des Ami(e)s de Confiance
                  </h2>
                </Accordion.Header>
                <Accordion.Body>
                  <p class="lead">
                    Partagez avec des ami(e)s de confiance et bienveillants qui
                    pourraient également contribuer à cette expérience unique.
                  </p>
                  <ClipBoardComponent
                    content={`Salut, j’aide ${nameOfResearcher} à utiliser l’appli Kijimarii. Kijimarii est l'expérience sociale grandeur nature qui tente de se passer des sites de rencontres. Pour ce faire, Kijimarii se forge sous l'hypothèse que les gens qui nous correspondent se trouvent dans notre entourage ou dans l'entourage de nos amis. Si tu trouves ce message, c'est que tu es un ami(e) ou que tu es un(e) ami(e) d'ami(e) de ${nameOfResearcher}. Ainsi, nous aimerions que tu cliques sur le lien suivant pour poursuivre et diffuser l'expérience afin de lui trouver la perle rare. Lien ${url}?uid=16836-e-686 `}
                    setShow={setShow}
                  />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
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
            ça y'est c'est copié vous pouvez le collez dans vos réseaux sociaux.
          </Toast.Body>
        </Toast>
      </ToastContainer>
      <FinishComponent />
    </Container>
  );
}
