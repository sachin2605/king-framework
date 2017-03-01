"use strict";
exports.__esModule = true;
var bodyParser = require("body-parser");
var helmet = require("helmet");
var path = require("path");
var express = require("express");
var inversify_express_utils_1 = require("inversify-express-utils");
var KingServer = (function () {
    function KingServer(container) {
        this._currentDirectory = process.cwd();
        this._server = new inversify_express_utils_1.InversifyExpressServer(container);
    }
    KingServer.prototype.setConfig = function (fn) {
        var _this = this;
        this._server.setConfig(function (app) {
            var viewsPath = path.join(_this._currentDirectory, "./app/views");
            app.set("view engine", "ejs");
            app.set("views", viewsPath);
            app.use(bodyParser.urlencoded({
                extended: true
            }));
            app.use(bodyParser.json());
            app.use(helmet());
            var publicPath = path.join(_this._currentDirectory, "./public");
            app.use("/scripts", express.static(path.join(publicPath, "scripts")));
            app.use("/styles", express.static(path.join(publicPath, "styles")));
            app.use("/images", express.static(path.join(publicPath, "images")));
            app.use("/assets", express.static(path.join(publicPath, "assets")));
            app.use("/fonts", express.static(path.join(publicPath, "fonts")));
            fn(app);
        });
    };
    KingServer.prototype.build = function () {
        return this._server.build();
    };
    return KingServer;
}());
exports.KingServer = KingServer;
