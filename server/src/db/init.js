import { readFile } from 'fs/promises';
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('servus.db');

const tablesExist = () =>
    new Promise((resolve, reject) => {
        db.get(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='outcome_mapping' OR name='servus_checks'",
            (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(!!row);
                }
            }
        );
    });

const tablesSeeded = () =>
    new Promise((resolve, reject) => {
        db.get("SELECT COUNT(*) AS count FROM outcome_mapping", (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row.count > 0);
            }
        });
    });

const runScript = async (scriptPath) => {
    try {
        const sql = await readFile(scriptPath, 'utf-8');
        await db.exec(sql);
        console.log(`${scriptPath} executed successfully`);
    } catch (err) {
        console.error(`Error executing ${scriptPath}: ${err}`);
    }
};

const main = async () => {
    try {
        const tablesExistFlag = await tablesExist();
        const tablesSeededFlag = await tablesSeeded();

        if (!tablesExistFlag) {
            await runScript('./src/db/schema/create.sql');
        } else {
            console.log('Tables already exist, skipping creation');
        }

        if (!tablesSeededFlag) {
            await runScript('./src/db/schema/seed.sql');
        } else {
            console.log('Tables already seeded, skipping seeding');
        }
    } catch (err) {
        console.error('Error:', err);
    } finally {
        db.close();
    }
};

export default main;