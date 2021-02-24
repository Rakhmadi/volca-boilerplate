import { DataTypes , Model, Database, MySQLConnector } from './volca.ts';

const connector = new MySQLConnector({
  database: 'volca',
  host: '127.0.0.1',
  username: 'root',
  password: '',
  port: 3306, // optional
});

export const db = new Database(connector);

export class Flight extends Model {
    static table = 'flights';
    static timestamps = true;
  
    static fields = {
      id: { primaryKey: true, autoIncrement: true },
      departure: DataTypes.STRING,
      destination: DataTypes.STRING,
      flightDuration: DataTypes.FLOAT,
    };
  
    static defaults = {
      flightDuration: 2.5,
    };
  }
  db.link([Flight]);

 