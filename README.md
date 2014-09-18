# Test-Services-App 

*Cette mini-app développée pour la NWX Drupal Meetup #3 du 17/09/14 en AngularJS permet de visualiser les ressources "Concerts" exposées par le site drupal situé sur http://nwx.bookdabun.fr/.*

## Comment ça marche ?

Tout simplement, on fait une requête de type GET sur l'endpoint /api du site drupal.

On passe dans l'url de la requête les arg suivants :
- /api*/views* -> Permet de GETer les services views configurées
- /api*/views*/*concerts* -> Permet de GETer la services views configuée avec le path /concerts

