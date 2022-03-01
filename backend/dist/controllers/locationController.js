"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationController = void 0;
const microlocations_1 = __importDefault(require("../models/microlocations"));
const streets_1 = __importDefault(require("../models/streets"));
const cities_1 = __importDefault(require("../models/cities"));
class LocationController {
    constructor() {
        this.insertMicrolocation = (req, res) => {
            let microlocation = req.body.microlocation;
            microlocations_1.default.insertMany([{
                    "name": microlocation,
                }], (err, location) => {
                if (!err)
                    res.json(location);
                else
                    console.log(err);
            });
        };
        this.getMicrolocations = (req, res) => {
            microlocations_1.default.find((err, locations) => {
                if (!err)
                    res.json(locations);
                else
                    console.log(err);
            });
        };
        this.insertStreet = (req, res) => {
            let street = req.body.street;
            streets_1.default.insertMany([{
                    "name": street,
                }], (err, location) => {
                if (!err)
                    res.json(location);
                else
                    console.log(err);
            });
        };
        this.getStreets = (req, res) => {
            streets_1.default.find((err, locations) => {
                if (!err)
                    res.json(locations);
                else
                    console.log(err);
            });
        };
        this.getCities = (req, res) => {
            cities_1.default.find((err, locations) => {
                if (!err)
                    res.json(locations);
                else
                    console.log(err);
            });
        };
    }
}
exports.LocationController = LocationController;
//# sourceMappingURL=locationController.js.map