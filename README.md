# LaravelVueBook
Simple example Single page application with Laravel 5.7 and Vue js 

## Install with Composer

```
    $ curl -s http://getcomposer.org/installer | php
    $ php composer.phar install or composer install
```

## Install NPM dependencies and add vue-router

```
    $ yarn install
    $ yarn add vue-router # or npm install vue-router

```
## Configures database and start seed

```
    $ php artisan migrate
    $ php artisan db:seed
```

## List Books on url

```
   127.0.0.1:8000/book
```

## Build js with Laravel Mix with NPM

```
    $ npm run dev
```
   or
```
    $ npm run watch
```

## Build js with Laravel Mix with Yarn

```
   $ yarn dev
```
   or
```
   $ yarn watch
```
