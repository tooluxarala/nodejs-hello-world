# Node.js Hello World exemple
## I. Tester l'installation de node
node -v // pour afficher la version 
npm -v // pour afficher la version 

## II. Hello world app
### 1 - créer un fichier server.js
### 2 - ajouter la ligne suivante console.log("Hello World !");
### 3 - lancer le programme avec ``node server.mjs``. Vous devez voir le message 'Hello World !'
### 4 - créer avec le module Http un endpoint '/hello' qui retourne le message 'Hello World !'
### 5 - Modifier le endpoint '/hello' pour prendre un paramètre 'name' et l'afficher comme suit :
'Hello <name> !'
#### Exemples:
http://localhost:3000/hello?name=Coumba
name = 'Coumba', ==> 'Hello Coumba !'
http://localhost:3000/hello?name=Pathé
name = 'Pathé', ==> 'Hello Pathé !'