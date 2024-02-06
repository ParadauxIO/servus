import sqlite3 from 'sqlite3';


const db = new sqlite3.Database('servus.db');

import init from "./init.js";

init();

export default db;
