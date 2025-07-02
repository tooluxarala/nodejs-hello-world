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

##Exercice
### 1 Modifier le endpoint '/hello' pour dire si l'utilisateur il a plus de 18 ans
http://localhost:3000/hello?name=Coumba,age=10
name = 'Coumba', ==> 'Hello Coumba, vous ête mineur(e)!'
http://localhost:3000/hello?name=Coumba,age=30
name = 'Coumba', ==> 'Hello Coumba, vous ête minmajeur(e)!'
### 2 Crée un endpoint '/age' qui permet de calculer l'age de l'utilisateur en donnant l'année de naissance
http://localhost:3000/age?name=Pathé,birth=2000
name = 'Pathé', ==> 'Hello Pathé, vous avez 25 ans'

