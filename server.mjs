import { createServer } from 'http';
import { parse } from 'url';

const hostname = '127.0.0.1';
const port = 3000;

const users = [
    { name: "Pathé", birth: 2000 },
    { name: "Coumba", birth: 2010 },
    { name: "Samba", birth: 2005 },
    { name: "Codou", birth: 2015 },
    { name: "Demba", birth: 2020 }
];

const currentYear = new Date().getFullYear();

const server = createServer((req, res) => {
    const { pathname, query } = parse(req.url, true);
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

    // 1. Endpoint /hello
    if (pathname === '/hello') {
        const name = query.name || 'Inconnu';
        const age = parseInt(query.age);

        if (!isNaN(age)) {
            const status = age >= 18 ? 'majeur(e)' : 'mineur(e)';
            res.end(`Hello ${name}, vous êtes ${status} !\n`);
        } else {
            res.end(`Hello ${name} !\n`);
        }

        // 2. Endpoint /age
    } else if (pathname === '/age') {
        const name = query.name || 'Inconnu';
        const birth = parseInt(query.birth);

        if (!isNaN(birth)) {
            const age = currentYear - birth;
            res.end(`Hello ${name}, vous avez ${age} ans\n`);
        } else {
            res.end('Veuillez fournir une année de naissance valide.\n');
        }

        // 3. Endpoint /whoami
    } else if (pathname === '/whoami') {
        let person = null;

        if (query.name) {
            person = users.find(u => u.name.toLowerCase() === query.name.toLowerCase());
        } else if (query.birth) {
            const birth = parseInt(query.birth);
            person = users.find(u => u.birth === birth);
        }

        if (person) {
            const age = currentYear - person.birth;
            res.end(`Vous êtes ${person.name}, vous avez ${age} ans\n`);
        } else {
            res.end('Utilisateur non trouvé.\n');
        }

        // 4. Endpoint /students
    } else if (pathname === '/students') {
        const minors = users.filter(u => currentYear - u.birth < 18);
        const result = minors
            .map(u => `${u.name} (${currentYear - u.birth} ans)`)
            .join(',\n');
        res.end(result || 'Aucun mineur trouvé.\n');

        // Default route
    } else {
        res.end('Bienvenue sur le serveur Node.js !\n');
    }
});

server.listen(port, hostname, () => {
    console.log(`✅ Serveur lancé sur http://${hostname}:${port}/`);
});
