import mysql from 'mysql2'
export default async function handler(req, res) {
    const { FullName, number, email, overveiw, Checkout, date, time } = await req.body
    const connection = mysql.createConnection({
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: "clinic"
    });
    connection.connect((err) => {
        if (err) {
            console.log("Error", err.message)
            res.status(500).json({ Error: err.message })
        }
        if (req.method == 'POST') {
            // count the mobile phone is already exist or not
            const count = `SELECT COUNT(*) from doctordate WHERE number = ${number};`
            connection.query(count, function (err, result) {
                if (err);
                // here we add result[0] to stop the saving data into the table
                if (result[0]['COUNT(*)'] > 0) {
                    res.status(200).json({ result: "You have already booked the appointment" })
                    console.log("You have already booked the appointment")
                }
                else {
                    const find = `SELECT COUNT(*) from doctordate;`
                    connection.query(find, function (err, result) {
                        if (err);

                        // inserting the values which is come from the users

                        const dataTrnsfer = `INSERT INTO doctordate(FullName,number,email,overveiw,Checkout,date,time)
                        VALUES("${FullName}","${number}","${email}","${overveiw}","${Checkout}","${date}","${time}")`
                        connection.query(dataTrnsfer, function (err, result) {
                            if (err) throw err;
                            res.status(201).json({ result: "You have successfully booked the appointment" })
                        })

                    })
                }
            })
        }
    })
}


