import mysql from 'mysql'
import dotenv from 'dotenv'
dotenv.config()

export const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

connection.connect((err) => {
    if (err) {
        console.log('error connecting', err.stack);
        return
    }
    console.log('connection successfull')
})