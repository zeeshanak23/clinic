import mysql from 'mysql2';

const connection = mysql.createConnection({
    user: "root",
    password: "Zeeshan@12",
    host: "127.0.0.1",
    port: "3306",
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
        // console.log(result);
        return res.status(200).json(result)
    });

}

