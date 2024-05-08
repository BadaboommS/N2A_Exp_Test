# N2A_Exp_Test

ex_1:
HTML / CSS avec le framework Boostrap
J'ai essayé d'utiliser au maximum les classes offertes par bootstrap pour faire le design et le responsive.
L'aspect visuel du site est clairement mon point faible.
Mais j'essaye de compenser avec les fonctionnalités de boostrap pour rendre le tout plus harmonieux et agréable dans la navigation.
Bien évidement, les liens externes sont factices.


ex_2:
J'ai rajouté quelques animations JS (notamment on scroll), pour rendre la page plus dynamique.
La gestion de la requête est gérée avec une fonction handleSubmit.
    -> Validation de l'email
    -> Conformation de l'utilisateur
    -> Requête POST (avec fetch)
    -> Popup de validation

J'ai rencontré quelques erreurs durant cette étape:
- CORS: classique, mais l'API bloque les connexion de client web
    => mode no-cors: error 401, les cors semblent être obligatoire pour l'authentification
    => J'ai deploy le site pour tester avec un host différent
- Mixed content: J'ai host à la fois sur Github Pages et Render. Cependant, l'API étant en http l'erreur de sécurité mixed content empêche la requête
    => J'ai utilisé de mettre la meta donnée qui permet d'upgrade les lien http en https pour éviter ce problème, mais l'API répond avec une erreur d'authentification
        -> Il fauddrait soit deploy un site sans sécurité https soit changer l'endpoint
- Proxy: Au final, j'ai setup un proxy pour permettre de tester la requête depuis mon client web => Code 200


ex_3:
Je n'ai pas encore abordé le framework symfony pour le moment.
Cette branche ne contiendra pas de changements significatifs.

Concernant mes connaissances en PHP, j'ai pu faire des projets en DUT (mais ça commence à faire un moment).
J'ai cependant recommencé à m'intéresser au language récement via les cours du site codeguage (https://www.codeguage.com/courses/php/introduction) qui se concentre plus sur l'aspect technique et le fonctionnement interne du langage.


ex_4:
Ajout des tag html loading="lazy" pour toutes les images pour optimiser le chargement des images non-visibles.
Minifications des fichier css et js avec des outils de minifications.
    =>vérification des fonctionalités OK
Ayant déjà utilisé le Framework Tailwind, je me suis demandé si bootstrap permettait d'importer seulement les classes utilisées.
Mais je pense que ceci ne fonctionnerais que dans le cas où les fichiers étaient installés en local.
J'ai choisi de rester sur la solution de l'importation au CDN avec les version min des modules css et js.