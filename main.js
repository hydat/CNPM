var http = require ("http");
http.createServer (function(request, response) {
    response.writeHead(200,{"Context-Type":"text/plain"});
    response.end("Hello");
}).listen(8000);
console.log("Server running at http://127.0.0.1:8000 or localhost:8000");

var sql = require('node-sqlserver');
var conn_str = "Driver={SQL Server Native Client 11.0};Server=(local);Database=DoAn;Trusted_Connection={Yes}";

sql.open(conn_str, function (err, conn) {
    if (err) {
        console.log("Error opening the connection!");
        return;
    }
    conn.queryRaw("select * from DoAn", function (err, results) {
        if (err) {
            console.log("Error running query!");
            return;
        }
        for (var i = 0; i < results.rows.length; i++) {
            console.log("MaSV: " + results.rows[i][0] + " TenSV: " + results.rows[i][1]
            + " MaLop: " + results.rows[i][2] + " SDT: " + results.rows[i][3] + " Que: " + results.rows[i][4]);
        }
    });
});