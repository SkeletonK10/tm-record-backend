import sec from "../db_config_secret.json";

const mysql = require("mysql");

const con = mysql.createConnection(sec);

export default con;
