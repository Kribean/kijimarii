import { ListGroup } from "react-bootstrap";

export default function ChartContent() {
  return (
    <>
      <ListGroup>
        <ListGroup.Item>
          État d'esprit sain : Les membres de Kijimarii doivent être dans un
          état d'esprit sain, ouverts à de nouvelles rencontres et prêts à
          construire des relations significatives.
        </ListGroup.Item>
        <ListGroup.Item>
          Ouverture à la rencontre : En rejoignant Kijimarii, vous affirmez être
          ouvert à la possibilité de rencontrer de nouvelles personnes et à
          l'idée d'explorer des connexions amoureuses.
        </ListGroup.Item>
        <ListGroup.Item>
          Évitez les effets négatifs des rencontres en ligne : Notre approche
          scientifique vise à éliminer les risques et les effets indésirables
          des rencontres en ligne. Fini les déceptions, les risques de sécurité
          en ligne, la dépendance excessive, les impacts psychologiques, les
          problèmes de confiance, les pressions liées à l'image corporelle, et
          la superficialité.
        </ListGroup.Item>
        <ListGroup.Item>
          Kijimarii, bien plus qu'une appli de rencontre : Nous ne sommes pas
          simplement une application de rencontre, mais une expérience sociale
          dédiée à la création de relations sérieuses. Trouvez l'amour de
          manière naturelle, entouré de personnes qui vous ressemblent et
          partagent vos valeurs.
        </ListGroup.Item>
      </ListGroup>
      <ListGroup className="my-4">
        <ListGroup.Item>
          Collecte Limitée : Nous collectons uniquement les données essentielles
          pour vous offrir une expérience personnalisée et sécurisée. Ces
          données incluent votre adresse e-mail et les photos que vous
          choisissez de partager sur votre profil.
        </ListGroup.Item>
        <ListGroup.Item>
          Utilisation Responsable : Vos informations, en particulier les photos
          et les adresses e-mail, ne seront utilisées que dans le cadre du
          fonctionnement de Kijimarii. Elles ne seront en aucun cas vendues,
          louées ou partagées à des tiers non autorisés.
        </ListGroup.Item>
        <ListGroup.Item>
          Visibilité Contrôlée : Vous avez le contrôle total sur la visibilité
          de vos photos. Choisissez qui peut les voir en définissant vos
          préférences de confidentialité dans les paramètres de votre profil.
        </ListGroup.Item>
      </ListGroup>
      <p>
        En adhérant à cette charte, vous contribuez à créer une atmosphère
        propice à des rencontres authentiques, positives et épanouissantes.
        Merci de faire partie de la communauté Kijimarii et de contribuer à
        faire de chaque rencontre une opportunité exceptionnelle.
      </p>
    </>
  );
}
