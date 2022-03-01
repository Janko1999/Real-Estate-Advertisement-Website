"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const locationController_1 = require("../controllers/locationController");
const LocationRouter = express_1.default.Router();
LocationRouter.post('/insertMicrolocation', (req, res) => {
    new locationController_1.LocationController().insertMicrolocation(req, res);
});
LocationRouter.get('/getMicrolocations', (req, res) => {
    new locationController_1.LocationController().getMicrolocations(req, res);
});
LocationRouter.post('/insertStreet', (req, res) => {
    new locationController_1.LocationController().insertStreet(req, res);
});
LocationRouter.get('/getStreets', (req, res) => {
    new locationController_1.LocationController().getStreets(req, res);
});
LocationRouter.get('/getCities', (req, res) => {
    new locationController_1.LocationController().getCities(req, res);
});
exports.default = LocationRouter;
//# sourceMappingURL=LocationRouter.js.map