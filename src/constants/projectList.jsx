const projects = [
    {
        title: "Site vitrine pour une diététicienne",
        description: "Site vitrine professionnel développé avec ReactJS et Tailwind CSS.",
        longDescription:
            "Reprise du site vitrine pour Céline Fougerouse, diététicienne à Andrézieux-Bouthéon. " +
            "Le projet a consisté à optimiser le code existant, corriger divers bugs d’affichage, améliorer la lisibilité du site et développer la section contact, tout en veillant à maintenir une interface claire et cohérente avec l’identité visuelle de la cliente.",        tech: ["ReactJS", "Tailwind CSS", "JavaScript", "Responsive Design", "UX/UI Design"],
        thumbnail: "/assets/celine.PNG",
        images: ["/assets/celine_page.PNG", "/assets/celine_page_modal.PNG"],
        link: "https://www.celinefougerouse.fr",
    },
    {
        title: "BattleOffice",
        description: "Application Symfony dédiée à la gestion de souscriptions avec Stripe.",
        longDescription:
            "BattleOffice est une application web conçue avec Symfony, permettant la création de comptes utilisateurs, la gestion d'abonnements, et l'intégration complète avec Stripe pour les paiements récurrents. Elle propose un back-office clair et sécurisé, idéal pour les services SaaS.",
        tech: ["Symfony", "Stripe", "Doctrine", "Twig"],
        thumbnail: "/assets/battleOffice.PNG",
        images: ["/assets/battleOffice2.PNG"],
        link: null,
        repo: "https://github.com/Amayas-Tamarat/BattleOffice",
    },
    {
        title: "LuxuryService",
        description: "Plateforme de gestion de profils utilisateurs avec Symfony.",
        longDescription:
            "LuxuryService est une application Symfony qui permet aux utilisateurs de créer, modifier et gérer leur profil via une interface intuitive. Elle propose également une section d'administration pour contrôler les comptes, avec un système de sécurité robuste et une architecture évolutive.",
        tech: ["Symfony", "Doctrine", "Twig", "Security"],
        thumbnail: "/assets/luxuryservice1.PNG",
        images: ["/assets/luxuryservice2.PNG",
                "/assets/luxuryservice1.PNG"
        ],
        link: null,
        repo: "https://github.com/Amayas-Tamarat/LuxuryService",
    },
    {
        title: "Symfony Docker Setup",
        description: "Environnement Docker réutilisable pour projets Symfony.",
        longDescription:
            "Ce projet propose un setup complet Dockerisé pour démarrer rapidement des projets Symfony avec NGINX, PHP 8+, MySQL, PHPMyAdmin, et Composer. Il inclut également un Makefile pour automatiser les commandes courantes, facilitant ainsi le développement local.",
        tech: ["Docker", "Symfony", "NGINX", "MySQL", "PHPMyAdmin"],
        thumbnail: "/assets/docker.png",
        images: ["/assets/docker.png"],
        link: null,
        repo: "https://github.com/Amayas-Tamarat/Symfony-Docker",
    },
];

export default projects;
