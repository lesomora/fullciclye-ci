var express = require("express");
var app = express();
app.get("/", function (req, res) {
res.send("Pagina Full Cycle!!");
});
var server = app.listen(8081, function () { console.log("Pagina Full Cycle!!");});

if (process.env.NODE_ENV === 'test' ) {
    server.close()
};