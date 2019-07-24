var pool = require('../../config/db_config');
 
module.exports = function () {
  return {
    select: function(callback){
      pool.getConnection(function(err, con){
        var sql = 'select * from test';
        con.query(sql, function (err, result, fields) {
          con.release();
          if (err) return callback(err);
          callback(null, result);
        });
      });
    },
    pool: pool
  }
};
