const dotenv = require('dotenv')
const MySQL = require('mysql')
dotenv.config()

class Query{
    /**
     * @param {boolean} log - Affiche un message de succès.
     */
    constructor(log){
        this._setConn(this._loadConn())
        this.log = log
    }
    _setConn(connection){
        this.conn = connection
    }
    _getConn()
    {
        return this.conn
    }
    _loadConn()
    {
        var Connection = MySQL.createConnection({
            host: process.env.HOST,
            port: process.env.PORT,
            user: process.env.USER,
            password: process.env.PWD,
            database: process.env.DATABASE,
            charset: process.env.CHARSET
          });
          Connection.connect(function(err) {
            if (err) {
              console.error('error connecting: ' + err.stack);
              return;
            }
           
            console.log('connected as id ' + Connection.threadId);
          });
          return Connection
    }
    /**
     * @param {String} qry - Requête à executer sur la base de données.
     */
    Query(qry)
    {

        this._getConn().query(qry, (error, results, fields) => {
            if (error) throw error;
            console.log(results)
        })
    }
    /**
     * 
     * @param {String} qry - Requête à executer sur la base de données.
     * @param {Array} params - Paramètres à envoyer.
     */
    Prepare(qry, params)
    {
        this._getConn().query(qry, params,(error, results, fields) =>{
            if (error) throw error;
            return results
        })
    }
    
}
module.exports = Query