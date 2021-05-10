import * as mysql from 'mysql2/promise';

require('dotenv').config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;

const pool = mysql.createPool({ host: 'localhost', user: DB_USER, password: DB_PASSWORD, database: DB_DATABASE });

const getConnection = () => {
  return pool.getConnection();
};

export const sendQuery = async (query: string, values?: any[]): Promise<any[]> => {
  try {
    const connection = await getConnection();
    try {
      const [rows]: any[] = await connection.execute(query, values);
      connection.release();
      return rows;
    } catch (err) {
      connection.release();
      console.log('query error');
      console.log(err);
      return [];
    }
  } catch (err) {
    console.log('db error');
    console.log(err);
    return [];
  }
};
