const { Pool } = require('pg');

const connectionString = "postgresql://user2:12345678@localhost:5433/practica_db";

const pool = new Pool({connectionString});

// pool.query('select * from estudiantes where edad > 25')
// .then(res => {
//     console.log(res.rows);
// })

// pool.query('select * from estudiantes order by apellidos desc')
// .then(res => {
//     console.log(res.rows);
// })

pool.query('select * from cursos')
.then(res => {
    console.log(res.rows);
})