import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import * as path from "path";
import * as express from "express";
import * as inversify from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";



export class KingServer {
    private readonly _server: InversifyExpressServer;
    private readonly _currentDirectory = process.cwd();

    public constructor(
        container: inversify.interfaces.Container
    ) {
        this._server = new InversifyExpressServer(container);
    }

    public setConfig(fn: (app: express.Application) => void) {
        this._server.setConfig((app) => {
            const viewsPath = path.join(this._currentDirectory, "./app/views");
            app.set("view engine", "ejs");
            app.set("views", viewsPath);

            app.use(bodyParser.urlencoded({
                extended: true
            }));
            app.use(bodyParser.json());

            app.use(helmet());

            const publicPath = path.join(this._currentDirectory, "./public");
            app.use("/scripts", express.static(path.join(publicPath, "scripts")));
            app.use("/styles", express.static(path.join(publicPath, "styles")));
            app.use("/images", express.static(path.join(publicPath, "images")));
            app.use("/assets", express.static(path.join(publicPath, "assets")));
            app.use("/fonts", express.static(path.join(publicPath, "fonts")));

            fn(app);
        });
    }

    public start(port: number = 8080): express.Application {
        const app = this._server.build();
        app.listen(port);
        return app;
    }
}