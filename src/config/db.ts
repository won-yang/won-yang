import * as mysql from 'mysql2/promise';
import {secret} from './secret_keys';

const pool = mysql.createPool({ host: 'localhost', user: secret.db.user, password: secret.db.password, database: secret.db.database });

const getConnection = () => {
  return pool.getConnection();
};

export const sendQuery = async (query: string, values: []) => {
  try {
    const connection = await getConnection();
    try {
      const [rows] = await connection.execute(query, values);
      connection.release();
      return rows;
    } catch (err) {
      connection.release();
      console.log('query error');
      console.log(err);
    }
  } catch (err) {
    console.log('db error');
    console.log(err);
  }
};
