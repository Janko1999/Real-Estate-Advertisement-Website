"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdController = void 0;
const ad_1 = __importDefault(require("../models/ad"));
const agencies_1 = __importDefault(require("../models/agencies"));
class AdController {
    constructor() {
        this.insert = (req, res) => {
            let lokacija = req.body.lokacija;
            let tip = req.body.tip;
            ;
            let sprat = req.body.sprat;
            let ukupnoSpratova = req.body.ukupnoSpratova;
            let opis = req.body.opis;
            let cena = req.body.cena;
            let grejanje = req.body.grejanje;
            let balkon = req.body.balkon;
            let terasa = req.body.terasa;
            let lodja = req.body.lodja;
            let klima = req.body.klima;
            let parking = req.body.parking;
            let lift = req.body.lift;
            let sobe = req.body.sobe;
            let povrsina = req.body.povrsina;
            let stanje = req.body.stanje;
            let podrum = req.body.podrum;
            let garaza = req.body.garaza;
            let internet = req.body.internet;
            let interfon = req.body.interfon;
            let telefon = req.body.telefon;
            let basta = req.body.basta;
            let username = req.body.username;
            let naziv = req.body.naziv;
            ad_1.default.insertMany([
                {
                    "naziv": naziv,
                    "tip": tip,
                    "sprat": sprat,
                    "ukupnoSpratova": ukupnoSpratova,
                    "opis": opis,
                    "cena": cena,
                    "grejanje": grejanje,
                    "sobe": sobe,
                    "povrsina": povrsina,
                    "stanje": stanje,
                    "balkon": balkon,
                    "terasa": terasa,
                    "lodja": lodja,
                    "klima": klima,
                    "parking": parking,
                    "lift": lift,
                    "podrum": podrum,
                    "garaza": garaza,
                    "interfon": interfon,
                    "internet": internet,
                    "telefon": telefon,
                    "basta": basta,
                    "username": username,
                    "status": "Dostupno",
                    "godina": req.body.godina,
                    "imageData": req.body.imageData,
                    "rezije": req.body.rezije,
                    "busLines": req.body.busLines,
                    "agency": req.body.agency,
                    "avgPrice": "0",
                    "agencyName": req.body.agencyName,
                    "soldMonth": "",
                    "city": req.body.city,
                    "state": req.body.state,
                    "microlocation": req.body.microlocation,
                    "street": req.body.street
                }
            ], (err, ad) => {
                // let file = req['files'].thumbnail;
                // console.log("File uploaded: ", file.name)
                if (err)
                    console.log(err);
                else
                    res.json(ad);
            });
        };
        this.getAds = (req, res) => {
            ad_1.default.find({ "status": "Dostupno" }, (err, ads) => {
                if (!err) {
                    res.json(ads);
                }
            });
        };
        this.getSoldAds = (req, res) => {
            ad_1.default.find({ "status": "Prodato" }, (err, ads) => {
                if (!err) {
                    res.json(ads);
                }
            });
        };
        this.getMyAds = (req, res) => {
            let username = req.body.username;
            ad_1.default.find({ "username": username }, (err, ads) => {
                if (!err) {
                    res.json(ads);
                }
            });
        };
        this.sellAd = (req, res) => {
            let username = req.body.username;
            let naziv = req.body.name;
            ad_1.default.updateOne({ "username": username, "naziv": naziv }, { "status": "Prodato" }, (err, ad) => {
                if (!err) {
                    res.json(ad);
                }
            });
        };
        this.addToFavourites = (req, res) => {
            let username = req.body.username;
            let adUser = req.body.adUser;
            let name = req.body.name;
            ad_1.default.updateOne({ "username": adUser, "naziv": name }, { $push: { 'users': username } }, (err, ad) => {
                if (!err)
                    res.json(ad);
            });
        };
        this.removeFromFavourites = (req, res) => {
            let username = req.body.username;
            let adUser = req.body.adUser;
            let name = req.body.name;
            ad_1.default.updateOne({ "username": adUser, "naziv": name }, { $pull: { users: username } }, (err, ad) => {
                if (!err)
                    res.json(ad);
            });
        };
        this.getFavourites = (req, res) => {
            let username = req.body.username;
            ad_1.default.find({ "users": username, "status": "Dostupno" }, (err, ads) => {
                if (!err) {
                    res.json(ads);
                }
            });
        };
        this.insertPicture = (req, res) => {
            let username = req.body.username;
            let image = req.body.image;
            let name = req.body.name;
            ad_1.default.updateOne({ "username": username, "naziv": name }, { $push: { 'imageData': image } }, (err, ad) => {
                if (!err)
                    res.json(ad);
            });
        };
        this.changeAd = (req, res) => {
            let username = req.body.username;
            let naziv = req.body.naziv;
            let ad = req.body.ad;
            ad_1.default.updateOne({ "username": username, "naziv": naziv }, { $set: {
                    "naziv": ad.naziv,
                    "tip": ad.tip,
                    "sprat": ad.sprat,
                    "ukupnoSpratova": ad.ukupnoSpratova,
                    "opis": ad.opis,
                    "cena": ad.cena,
                    "grejanje": ad.grejanje,
                    "sobe": ad.sobe,
                    "povrsina": ad.povrsina,
                    "stanje": ad.stanje,
                    "balkon": ad.balkon,
                    "terasa": ad.terasa,
                    "lodja": ad.lodja,
                    "klima": ad.klima,
                    "parking": ad.parking,
                    "lift": ad.lift,
                    "podrum": ad.podrum,
                    "garaza": ad.garaza,
                    "interfon": ad.interfon,
                    "internet": ad.internet,
                    "telefon": ad.telefon,
                    "basta": ad.basta,
                    "username": username,
                    "status": "Dostupno",
                    "godina": ad.godina,
                    "rezije": ad.rezije,
                    "busLines": ad.busLines,
                    "city": ad.city,
                    "state": ad.state,
                    "microlocation": ad.microlocation,
                    "street": ad.street
                } }, (err, ad) => {
                if (!err)
                    res.json(ad);
                else
                    console.log(err);
            });
        };
        this.getAgency = (req, res) => {
            let name = req.body.name;
            agencies_1.default.findOne({ "name": name }, (err, agency) => {
                if (!err)
                    res.json(agency);
                else
                    console.log(err);
            });
        };
        this.getAdsByLocation = (req, res) => {
            let location = req.body.location;
            let tip = req.body.tip;
            ad_1.default.find({ "microlocation": location, "tip": tip }, (err, ads) => {
                if (!err)
                    res.json(ads);
                else
                    console.log(err);
            });
        };
        this.getAdsByAgency = (req, res) => {
            let agency = req.body.agencyName;
            ad_1.default.find({ "agencyName": agency }, (err, ads) => {
                if (!err)
                    res.json(ads);
                else
                    console.log(err);
            });
        };
        this.updateAverage = (req, res) => {
            let location = req.body.location;
            let avgPrice = req.body.avgPrice;
            let tip = req.body.tip;
            ad_1.default.updateMany({ "microlocation": location, "tip": tip }, { $set: { "avgPrice": avgPrice } }, (err, ads) => {
                if (!err)
                    res.json(ads);
                else
                    console.log(err);
            });
        };
        this.setDate = (req, res) => {
            let name = req.body.name;
            let username = req.body.username;
            let date = req.body.date;
            ad_1.default.updateOne({ "naziv": name, "username": username }, { "soldMonth": date }, (err, ad) => {
                if (!err)
                    res.json(ad);
                else
                    console.log(err);
            });
        };
    }
}
exports.AdController = AdController;
//# sourceMappingURL=adController.js.map