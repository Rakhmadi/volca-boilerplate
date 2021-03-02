

/**
 *
 * @Author https://github.com/eveningkid
 * @Documentation https://eveningkid.com/denodb-docs/
 * @Repository https://github.com/eveningkid/denodb
 *
 *
 */

  import {Model,DataTypes,db} from '../volca_module.ts'
  export default class contrd extends Model {

      static table = 'nametable'; //name table
      static timestamps = true;   //create_at & update_at

      static fields = { // field
        id: { primaryKey: true, autoIncrement: true },
      };

    }

  db.link([contrd]);
  db.sync()