"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var PORT = 3000;
new app_1["default"]().app.listen(PORT, function () {
    console.log('Express server listening on port ' + PORT);
});
