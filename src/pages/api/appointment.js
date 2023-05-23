import mysql from 'mysql2';

const connection = mysql.createConnection({
    user: process.env.DB_HOST,
    password: process.env.DB_USERNAME,
    host: process.env.DB_PASSWORD,
    port: process.env.DB_PASSWORD,
    database: "clinic"
});

connection.connect((err) => {
    if (err) {
        console.log(err)
    }

})

export default async function handler(req, res) {
    const { fullName, reasonForcall, topic, contact } = await req.body
    const dataTrnsfer = `INSERT INTO appointment(fullName,reasonForcall,topic,contact)
    VALUES("${fullName}","${reasonForcall}","${topic}",${contact})`
    connection.query(dataTrnsfer, function (err, result) {
        if (err) console.log(err);
        return res.status(200).json(result)
    });

}

