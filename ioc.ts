import "reflect-metadata";
import { Container, inject, injectable } from "inversify";
import { autoProvide, makeProvideDecorator, makeFluentProvideDecorator } from "inversify-binding-decorators";
import getDecorators from "inversify-inject-decorators";
import { TYPE } from "inversify-express-utils";

let container = new Container();

let provide = makeProvideDecorator(container);
let fluentProvider = makeFluentProvideDecorator(container);

let provideNamed = function(identifier: any, name: any) {
    return fluentProvider(identifier)
        .whenTargetNamed(name)
        .done();
};

let provideController = function(name: string) {
    return fluentProvider(TYPE.Controller)
        .whenTargetNamed(name)
        .done();
};

let {
    lazyInject,
    lazyInjectNamed,
    lazyInjectTagged,
    lazyMultiInject
} = getDecorators(container);

export {
    container,
    autoProvide,
    provide,
    provideNamed,
    provideController,
    inject,
    injectable,
    lazyInject,
    lazyInjectNamed,
    lazyInjectTagged,
    lazyMultiInject,
};
