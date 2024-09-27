var config = require("./db")

const sql = require('msnodesqlv8');

const  dbConection=async() =>{
    try {
        sql.query(config, "select * from Plato", (err, rows) => {
            console.log(rows);
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = { dbConection };