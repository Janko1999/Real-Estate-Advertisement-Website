"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgencyController = void 0;
const agencies_1 = __importDefault(require("../models/agencies"));
class AgencyController {
    constructor() {
        this.insert = (req, res) => {
            let name = req.body.name;
            let address = req.body.address;
            let city = req.body.city;
            let phoneNumber = req.body.phoneNumber;
            let PIB = req.body.PIB;
            agencies_1.default.insertMany([
                {
                    "name": name,
                    "address": address,
                    "city": city,
                    "phoneNumber": phoneNumber,
                    "PIB": PIB
                }
            ], (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.getAll = (req, res) => {
            agencies_1.default.find((err, agencies) => {
                if (!err) {
                    res.json(agencies);
                }
            });
        };
    }
}
exports.AgencyController = AgencyController;
//# sourceMappingURL=agencyController.js.map