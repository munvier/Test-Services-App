# Test-Services-App 

*Cette mini-app développée pour la NWX Drupal Meetup #3 du 17/09/14 en AngularJS permet de visualiser les ressources "Concerts" exposées par le site drupal situé sur http://nwx.bookdabun.fr/.*

## Comment ça marche ?

Tout simplement, on fait une requête de type GET sur l'endpoint /api du site drupal.

On passe dans l'url de la requête les arg suivants :
- /api/views -> Permet de GETer les services views configurées
- /api/views/concerts -> Permet de GETer la services views configuée avec le path /concerts

## Comment l'utiliser ?

Bien sûr, clonez le repo dans le répertoire de votre souhait.

> git clone https://github.com/munvier/Test-Services-App.git && cd Test-Services-App

Installez les dépendances

> bower install && npm install

Lancer l'index.html (en file:// ou hébergée en localhost, peu importe) && enjoy.
