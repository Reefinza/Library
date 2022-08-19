const express = require("express");
const app = express();

const jsonMiddleware = require("./middleware/json.middleware");
const AppRoute = require("./route/app.route");

const RepoManager = require("../manager/repo.manager");
const ServiceManager = require("../manager/service.manager");

// Controller
const UserController = require("../delivery/controller/user.controler");
const BookController = require("../delivery/controller/book.controller");
const BookRequestController = require("../delivery/controller/book_request.controller");
const AuthController = require("../delivery/controller/auth.controller");

// Route
const UserRoute = require("../delivery/route/user.route");
const BookRoute = require("../delivery/route/book.route");
const BookRequestRoute = require("../delivery/route/book_request.route");
const AuthRoute = require("../delivery/route/auth.route");

const DbMigration = require("../config/db_migratioin");
const Config = require("../config/config");
const ModelManager = require("../manager/model.manager");
const InfraManager = require("../manager/infra.manager");

module.exports = () => {
  const { host, port } = Config();
  const infraManager = () => InfraManager(Config);
  const modelManager = () => ModelManager(infraManager);
  const repoManager = () => RepoManager(modelManager);
  const serviceManager = () => ServiceManager(repoManager);
  const DbSync = modelManager();

  const { bookService, userService, bookRequestService,  } = serviceManager();

  const initUserRoute = () => {
    const userController = () => UserController(userService());
    return UserRoute(userController);
  };
  const initBookRoute = () => {
    const bookController = () => BookController(bookService());
    return BookRoute(bookController);
  };
  const initBookRequestRoute = () => {
    const bookRequestController = () => BookRequestController(bookRequestService());
    return BookRequestRoute(bookRequestController);
  };
  const initAuthRoute = () => {
    const authController = () => AuthController(authService());
    return AuthRoute(authController);
  }

  const initController = () => {
    app.use(jsonMiddleware);
    app.use(AppRoute(initBookRoute(), initUserRoute(), initBookRequestRoute(), initAuthRoute()));
  };

  const run = () => {
    initController();
    DbMigration(DbSync).catch();
    app.on("error", (err) => {
      console.log(`Server failed to start ${err.message}`);
    });
    app.listen(port, () => {
      console.log(`Server run on ${host}:${port}`);
    });
  };

  run();
};
