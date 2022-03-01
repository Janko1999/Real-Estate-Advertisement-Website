"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Ad = new Schema({
    naziv: {
        type: String
    },
    lokacija: {
        type: String
    },
    tip: {
        type: String
    },
    sprat: {
        type: String
    },
    ukupnoSpratova: {
        type: String
    },
    opis: {
        type: String
    },
    cena: {
        type: String
    },
    grejanje: {
        type: String
    },
    sobe: {
        type: String
    },
    povrsina: {
        type: String
    },
    stanje: {
        type: String
    },
    balkon: {
        type: Boolean
    },
    terasa: {
        type: Boolean
    },
    lodja: {
        type: Boolean
    },
    klima: {
        type: Boolean
    },
    parking: {
        type: Boolean
    },
    lift: {
        type: Boolean
    },
    podrum: {
        type: Boolean
    },
    garaza: {
        type: Boolean
    },
    interfon: {
        type: Boolean
    },
    internet: {
        type: Boolean
    },
    telefon: {
        type: Boolean
    },
    basta: {
        type: Boolean
    },
    username: {
        type: String
    },
    status: {
        type: String
    },
    godina: {
        type: String
    },
    users: {
        type: Array
    },
    imageData: {
        type: Array
    },
    rezije: {
        type: String
    },
    busLines: {
        type: Array
    },
    agency: {
        type: Boolean
    },
    avgPrice: {
        type: String
    },
    agencyName: {
        type: String
    },
    soldMonth: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    microlocation: {
        type: String
    },
    street: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Ad', Ad, 'ads');
//# sourceMappingURL=ad.js.map