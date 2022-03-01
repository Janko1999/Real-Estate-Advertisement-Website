"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Street = new Schema({
    name: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Street', Street, 'streets');
//# sourceMappingURL=streets.js.map