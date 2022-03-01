"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adController_1 = require("../controllers/adController");
const AdRouter = express_1.default.Router();
AdRouter.post('/newAd', (req, res) => {
    new adController_1.AdController().insert(req, res);
});
AdRouter.get('/getAds', (req, res) => {
    new adController_1.AdController().getAds(req, res);
});
AdRouter.get('/getSoldAds', (req, res) => {
    new adController_1.AdController().getSoldAds(req, res);
});
AdRouter.post('/getMyAds', (req, res) => {
    new adController_1.AdController().getMyAds(req, res);
});
AdRouter.post('/sellAd', (req, res) => {
    new adController_1.AdController().sellAd(req, res);
});
AdRouter.post('/addToFavourites', (req, res) => {
    new adController_1.AdController().addToFavourites(req, res);
});
AdRouter.post('/removeFromFavourites', (req, res) => {
    new adController_1.AdController().removeFromFavourites(req, res);
});
AdRouter.post('/getFavourites', (req, res) => {
    new adController_1.AdController().getFavourites(req, res);
});
AdRouter.post('/insertPicture', (req, res) => {
    new adController_1.AdController().insertPicture(req, res);
});
AdRouter.post('/changeAd', (req, res) => {
    new adController_1.AdController().changeAd(req, res);
});
AdRouter.post('/getAgency', (req, res) => {
    new adController_1.AdController().getAgency(req, res);
});
AdRouter.post('/getAdsByLocation', (req, res) => {
    new adController_1.AdController().getAdsByLocation(req, res);
});
AdRouter.post('/updateAverage', (req, res) => {
    new adController_1.AdController().updateAverage(req, res);
});
AdRouter.post('/getAdsByAgency', (req, res) => {
    new adController_1.AdController().getAdsByAgency(req, res);
});
AdRouter.post('/setDate', (req, res) => {
    new adController_1.AdController().setDate(req, res);
});
exports.default = AdRouter;
//# sourceMappingURL=AdRouter.js.map