"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var awsServerlessExpress = require("aws-serverless-express");
var server = awsServerlessExpress.createServer(app_1.app);
exports.handler = function (event, context) {
    console.log("EVENT: " + JSON.stringify(event));
    return awsServerlessExpress.proxy(server, event, context, "PROMISE").promise;
};
