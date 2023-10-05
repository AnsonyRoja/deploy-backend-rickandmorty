
const express = require("express");
const { conn } = require('./DB_connection');
const server = express();
const router = require('./routes/index');
const PORT = 3001;
const morgan = require("morgan");
// la informacion que me pasan en formato json, este middleware la pasa a objeto de javascript para que yo pueda trabajar
server.use(express.json());
server.use(morgan('dev'));

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});


server.use('/rickandmorty', router);
// conn.sync({ force: true }).then(() => {
conn.sync().then(() => {


    server.listen(PORT, () => {

        console.log(`Server raised in port: ${PORT}`);

    });

});

