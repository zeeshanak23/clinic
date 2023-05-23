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
    const { FullName, number, email, overveiw, Checkout, date, time } = await req.body
    const dataTrnsfer = `INSERT INTO doctordate(FullName,number,email,overveiw,Checkout,date,time)
    VALUES("${FullName}","${number}","${email}","${overveiw}","${Checkout}","${date}","${time}")`
    connection.query(dataTrnsfer, function (err, result) {
        if (err) console.log(err);
        // console.log(result);
        return res.status(200).json(result)
    });

}

