"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let User = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    city: {
        type: String
    },
    birthday: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    email: {
        type: String
    },
    agency: {
        type: String
    },
    licenseNumber: {
        type: String
    },
    status: {
        type: String
    },
    typeString: {
        type: String
    },
    imageData: {
        type: String
    },
    time: {
        type: String
    },
    favCount: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('User', User, 'users');
//# sourceMappingURL=users.js.map