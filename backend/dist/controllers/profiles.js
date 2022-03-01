var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Profile = require('../models/profile');
exports.getProfiles = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const profiles = yield Profile.find();
    res.status(200).json({ profiles });
});
exports.postProfile = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { name } = req.body;
    const imagePath = 'http://localhost:3000/images/' + req.file.filename; // Note: set path dynamically
    const profile = new Profile({
        name,
        imagePath,
    });
    const createdProfile = yield profile.save();
    res.status(201).json({
        profile: Object.assign({}, createdProfile._doc),
    });
});
//# sourceMappingURL=profiles.js.map