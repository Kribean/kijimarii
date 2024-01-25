import { ListGroup } from "react-bootstrap";

export default function ChartContent() {
  return (
    <>
      <ListGroup>
        <ListGroup.Item>
          <p className="h6">État d'esprit sain :</p>{" "}
          <p>
            Les membres de Kijimarii doivent être dans un état d'esprit sain,
            ouverts à de nouvelles rencontres et prêts à construire des
            relations significatives.
          </p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p className="h6">Ouverture à la rencontre :</p>
          <p>
            {" "}
            En rejoignant Kijimarii, vous affirmez être ouvert à la possibilité
            de rencontrer de nouvelles personnes et à l'idée d'explorer des
            connexions amoureuses.
          </p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p className="h6">
            Évitez les effets négatifs des rencontres en ligne :
          </p>
          <p>
            {" "}
            Notre approche scientifique vise à éliminer les risques et les
            effets indésirables des rencontres en ligne. Fini les déceptions,
            les risques de sécurité en ligne, la dépendance excessive, les
            impacts psychologiques, les problèmes de confiance, les pressions
            liées à l'image corporelle, et la superficialité.
          </p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p className="h6">Kijimarii, bien plus qu'une appli de rencontre :</p>
          <p>
            {" "}
            Nous ne sommes pas simplement une application de rencontre, mais une
            expérience sociale dédiée à la création de relations sérieuses.
            Trouvez l'amour de manière naturelle, entouré de personnes qui vous
            ressemblent et partagent vos valeurs.
          </p>
        </ListGroup.Item>
      </ListGroup>
      <ListGroup className="my-4">
        <ListGroup.Item>
          <p className="h6">Collecte Limitée :</p>{" "}
          <p>
            Nous collectons uniquement les données essentielles pour vous offrir
            une expérience personnalisée et sécurisée. Ces données incluent
            votre adresse e-mail et les photos que vous choisissez de partager
            sur votre profil.
          </p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p className="h6">Utilisation Responsable :</p>
          <p>
            {" "}
            Vos informations, en particulier les photos et les adresses e-mail,
            ne seront utilisées que dans le cadre du fonctionnement de
            Kijimarii. Elles ne seront en aucun cas vendues, louées ou partagées
            à des tiers non autorisés.
          </p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p className="h6">Visibilité Contrôlée :</p>
          <p>
            {" "}
            Vous avez le contrôle total sur la visibilité de vos photos.
            Choisissez qui peut les voir en définissant vos préférences de
            confidentialité dans les paramètres de votre profil.
          </p>
        </ListGroup.Item>
      </ListGroup>
      <p className="h6">
        En adhérant à cette charte, vous contribuez à créer une atmosphère
        propice à des rencontres authentiques, positives et épanouissantes.
        Merci de faire partie de la communauté Kijimarii et de contribuer à
        faire de chaque rencontre une opportunité exceptionnelle.
      </p>
    </>
  );
}
