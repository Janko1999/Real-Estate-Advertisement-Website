"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const agencyController_1 = require("../controllers/agencyController");
const AgencyRouter = express_1.default.Router();
AgencyRouter.post('/newAgency', (req, res) => {
    new agencyController_1.AgencyController().insert(req, res);
});
AgencyRouter.get('/getAll', (req, res) => {
    new agencyController_1.AgencyController().getAll(req, res);
});
exports.default = AgencyRouter;
//# sourceMappingURL=AgencyRouter.js.map