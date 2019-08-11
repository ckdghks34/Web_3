var mysql = require('mysql');
var pool = mysql.createPool({
	    host: '127.0.0.1',      // DB 접속 IP 주소
	    port: 3306,             // DB 접속 PORT 번호
	    user: 'yoon',         // DB 접속 ID
	    password: 'ss105024',   // DB 접속 Password
	    database: 'Web',        // 접속 DB명
	    connectionLimit: 2,     // DB 동시 접속 허용 수
	    queueLimit: 100,        // DB 대기 Queue 허용 수
});

module.exports = pool;

