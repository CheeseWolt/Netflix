# Netflix

[![Node.js CI](https://github.com/CheeseWolt/Netflix/actions/workflows/node.js.yml/badge.svg)](https://github.com/CheeseWolt/Netflix/actions/workflows/node.js.yml)
[![Docker Image CI](https://github.com/CheeseWolt/Netflix/actions/workflows/docker-image.yml/badge.svg)](https://hub.docker.com/repository/docker/cheesewolt/netflix/general)

Clone de l'affichage de netflix sous angular avec les films de l'API [Open Movie Database](https://api.themoviedb.org/)

## Build

C'est un projet Angular, pour le builder il va vous falloir installer les dépendances listées dans package.json et package-lock.json avec la commande `npm install`.

## Servir l'app

:warning: En mode developpement :warning:

`ng serve` ou `npm start` lance un serveur local. Pour un déploiement en prod, préférer un vrai serveur web (NGINX par exemple).
