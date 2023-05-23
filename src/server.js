const app = require('./app');

app.get('/', (_req, res) => { res.send('Hello World!') });

app.listen(3001, () => console.log('Rodando na porta 3001'));