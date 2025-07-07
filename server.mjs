import express from 'express';

const app = express();
const port = 3000;

// mineur/majeur
app.get('/hello', (req, res) => {
    const name = req.query.name;
    const age = parseInt(req.query.age);

    if (name && !isNaN(age)) {
        if (age >= 18) {
            res.send(`Hello ${name}, vous êtes majeur(e) !`);
        } else {
            res.send(`Hello ${name}, vous êtes mineur(e) !`);
        }
    } else if (name) {
        res.send(`Hello ${name} !`);
    } else {
        res.send('Hello World !');
    }
});

//  pour calculer l'âge avec l'année de naissance
app.get('/age', (req, res) => {
    const name = req.query.name;
    const birth = parseInt(req.query.birth);
    const currentYear = new Date().getFullYear();

    if (name && !isNaN(birth)) {
        const age = currentYear - birth;
        res.send(`Hello ${name}, vous avez ${age} ans`);
    } else {
        res.send('Merci de fournir un nom et une année de naissance');
    }
});

app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});
