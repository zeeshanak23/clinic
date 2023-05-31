
import mysql from 'mysql2'
export default async function handler(req, res) {
    const { name, location, date, phoneNumber } = await req.body
    const connection = mysql.createConnection({
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: "clinic"
    });
    connection.connect((err) => {
        if (err) {
            console.log("error", err.message)
            res.status(500).json({ error: err.message })
        }
        if (req.method == 'POST') {
            const count = `SELECT COUNT(*) from doctor_appointment WHERE phoneNumber = "${phoneNumber}" && date = "${date}";`
            connection.query(count, function (err, result) {
                if (err);
                if (result[0]['COUNT(*)'] > 0) {
                    res.status(200).json({ result: "You have already booked the appointment" })
                    console.log("You have already booked the appointment")
                }
                else {
                    const dataTrnsfer = `INSERT INTO doctor_appointment(name,location,date,phoneNumber)
                        VALUES("${name}","${location}","${date}","${phoneNumber}")`
                    connection.query(dataTrnsfer, function (err, result) {
                        if (err) throw err;
                        res.status(201).json({ result: "You have successfully booked the appointment" })
                    })
                }
            })
        }
    })
}
