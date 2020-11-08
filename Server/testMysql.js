var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',    // 호스트 주소
  user     : 'testName',           // mysql user
  password : 'testPassword',       // mysql password
  database : 'testMysql'         // mysql 데이터베이스
});
connection.connect();
connection.query('SELECT * from topic', 
function (error, results, fields) {
  if (error) {
      console.log(error);
  };
  console.log(results);
});
connection.end();