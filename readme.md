# ProductSale

[![N|Solid](https://firebasestorage.googleapis.com/v0/b/afn-pwa.appspot.com/o/shopping.png?alt=media&token=7cba4da6-1bb1-49c3-8037-5dd94a452458)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

productSale is a aplication, for save products and saleing. developed in laravel, mysql, angular with docker

And of course ProductSale itself is open source with a [public repository][afn]
 on GitHub.
 
### Installation

ProducSale requires 
[xammp](https://www.apachefriends.org/es/download_success.html)
[Node.js](https://nodejs.org/) v10+
[Laravel](https://laravel.com/docs/5.8/installation#installing-laravel)
[Angular](https://angular.io/guide/quickstart) v7+
[Mysql](https://www.mysql.com/downloads/)
[Docker](https://hub.docker.com/editions/community/docker-ce-desktop-windows)
[Git](https://git-scm.com/downloads)
to run.

Install the dependencies and devDependencies previous
start the server.

```sh
git clone https://github.com/afnarqui/ProductSale.git
cd ProductSale/app
docker-compose up --build
http://localhost:8080/
exec -it app_mysql bin/bash
docker exec -it app_mysql mysql -p --> add user and password
create database productsale
show databases;
use productsale
docker exec -it --user 1000:1000 phplaravel php artisan migrate
docker exec -it --user 1000:1000 phplaravel php artisan db:seed
cd ProductSale/web
npm install
ng build
cd dist
npm install http-server
http-server -p 8001
```

   [afn]: <https://github.com/afnarqui/ProductSale>
