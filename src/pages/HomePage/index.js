import { Container, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import coffeePng from "../../assets/coffee.jpg";
import angryCouplePng from "../../assets/angry-couple.jpg";
import smilingFriendsPng from "../../assets/happy_friends.jpg";
import brokenComputerPng from "../../assets/computer.jpg";
import psychoPng from "../../assets/psycho.jpg";

export default function HomePage() {
  return (
    <Container>
      <div className="jumbotron bg-light bg-gradient p-4">
        <Row>
          <Col xs={8}>
            <h1 className="display-4 textWinterSoul">Kijimarii</h1>
            <p className="lead">
              Kijimarii, l'application qui révolutionne la manière dont vous
              rencontrez l'amour en favorisant des relations authentiques à
              travers vos amis bienveillants.
            </p>

            <p>
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
            <p className="lead">
              <Link
                className="btn btn-primary btn-lg"
                to="signin"
                role="button"
              >
                Commencer l'expérience
              </Link>
            </p>
          </Col>
          <Col xs={4}>
            <Image
              className="featurette-image img-fluid mx-auto"
              src={coffeePng}
              alt="image d'un thé chaud"
              fluid
            />
          </Col>
        </Row>
      </div>

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            Rencontrez l'amour avec l'aide de vos amis
          </h2>
          <p className="lead">
            Kijimarii propose une nouvelle approche des rencontres amoureuses en
            mettant en relation des célibataires grâce à leurs amis
            bienveillants. Créez votre profil, laissez vos amis agir en tant que
            vos "anges gardiens" et les choses se feront naturellement.
          </p>
        </div>
        <div className="col-md-5">
          <Image
            className="featurette-image img-fluid mx-auto"
            src={smilingFriendsPng}
            alt="homme entouré de ses amis"
            fluid
          />
        </div>
      </div>

      <div className="row featurette">
        <div className="col-md-5">
          <Image
            className="featurette-image img-fluid mx-auto"
            src={brokenComputerPng}
            alt="un ordinateur cassé"
            fluid
          />
        </div>
        <div className="col-md-7">
          <h2 className="featurette-heading">Pas d'algorithme malsain</h2>
          <p className="lead">
            Adieu aux algorithmes obscurs des sites de rencontre ! Kijimarii se
            distingue en éliminant le côté malsain des rencontres en ligne. Fini
            les utilisateurs traités comme des outils à cash. Ici, la connexion
            authentique est la priorité, sans incitation à acheter des
            abonnements.
          </p>
        </div>
      </div>

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            Évitez les effets négatifs des rencontres en ligne
          </h2>
          <p className="lead">
            Notre approche scientifique vise à éliminer les risques et les
            effets indésirables des rencontres en ligne. Fini les déceptions,
            les risques de sécurité en ligne, la dépendance au swip, les impacts
            psychologiques, les problèmes de confiance, les pressions liées à
            l'image corporelle, et la superficialité.
          </p>
        </div>
        <div className="col-md-5">
          <Image
            className="featurette-image img-fluid mx-auto"
            src={angryCouplePng}
            alt="couple faché"
            fluid
          />
        </div>
      </div>

      <div className="row featurette">
        <div className="col-md-5">
          <Image
            className="featurette-image img-fluid mx-auto"
            src={psychoPng}
            alt="une psychologue assise"
            fluid
          />
        </div>
        <div className="col-md-7">
          <h2 className="featurette-heading">
            Kijimarii, bien plus qu'une appli de rencontre
          </h2>
          <p className="lead">
            Nous ne sommes pas simplement une application de rencontre, mais une
            expérience sociale dédiée à la création de relations sérieuses.
            Trouvez l'amour de manière naturelle, entouré de personnes qui vous
            ressemblent et partagent vos valeurs.
          </p>
        </div>
      </div>
    </Container>
  );
}
