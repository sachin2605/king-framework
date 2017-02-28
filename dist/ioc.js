"use strict";
exports.__esModule = true;
require("reflect-metadata");
var inversify_1 = require("inversify");
exports.inject = inversify_1.inject;
exports.injectable = inversify_1.injectable;
var inversify_binding_decorators_1 = require("inversify-binding-decorators");
exports.autoProvide = inversify_binding_decorators_1.autoProvide;
var inversify_inject_decorators_1 = require("inversify-inject-decorators");
var inversify_express_utils_1 = require("inversify-express-utils");
var container = new inversify_1.Container();
exports.container = container;
var provide = inversify_binding_decorators_1.makeProvideDecorator(container);
exports.provide = provide;
var fluentProvider = inversify_binding_decorators_1.makeFluentProvideDecorator(container);
var provideNamed = function (identifier, name) {
    return fluentProvider(identifier)
        .whenTargetNamed(name)
        .done();
};
exports.provideNamed = provideNamed;
var provideController = function (name) {
    return fluentProvider(inversify_express_utils_1.TYPE.Controller)
        .whenTargetNamed(name)
        .done();
};
exports.provideController = provideController;
var _a = inversify_inject_decorators_1["default"](container), lazyInject = _a.lazyInject, lazyInjectNamed = _a.lazyInjectNamed, lazyInjectTagged = _a.lazyInjectTagged, lazyMultiInject = _a.lazyMultiInject;
exports.lazyInject = lazyInject;
exports.lazyInjectNamed = lazyInjectNamed;
exports.lazyInjectTagged = lazyInjectTagged;
exports.lazyMultiInject = lazyMultiInject;
