"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const LoginRouter_1 = __importDefault(require("./routers/LoginRouter"));
const AgencyRouter_1 = __importDefault(require("./routers/AgencyRouter"));
const AdRouter_1 = __importDefault(require("./routers/AdRouter"));
const LocationRouter_1 = __importDefault(require("./routers/LocationRouter"));
const fileUpload = require('express-fileupload');
const app = (0, express_1.default)();
app.use(fileUpload());
app.use((0, body_parser_1.default)({ limit: '100mb' }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
mongoose_1.default.connect('mongodb://localhost:27017/PiaProjekat');
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log("Connection opened");
});
const Router = express_1.default.Router();
Router.use('/users', LoginRouter_1.default);
Router.use('/agencies', AgencyRouter_1.default);
Router.use('/ads', AdRouter_1.default);
Router.use('/location', LocationRouter_1.default);
app.use('/', Router);
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map