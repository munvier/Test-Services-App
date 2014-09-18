# Test-Services-App 

*Cette mini-app d�velopp�e pour la NWX Drupal Meetup #3 du 17/09/14 en AngularJS permet de visualiser les ressources "Concerts" expos�es par le site drupal situ� sur http://nwx.bookdabun.fr/.*

## Comment �a marche ?

Tout simplement, on fait une requ�te de type GET sur l'endpoint /api du site drupal.

On passe dans l'url de la requ�te les arg suivants :
- /api/views -> Permet de GETer les services views configur�es
- /api/views/concerts -> Permet de GETer la services views configu�e avec le path /concerts

## Comment l'utiliser ?

Bien s�r, clonez le repo dans le r�pertoire de votre souhait.

> git clone https://github.com/munvier/Test-Services-App.git && cd Test-Services-App

Installez les d�pendances

> bower install && npm install

Lancer l'index.html (en file:// ou h�berg�e en localhost, peu importe) && enjoy.
