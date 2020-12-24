"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Collection_1 = __importDefault(require("./Collection"));
const Payment_1 = __importDefault(require("./Payment"));
const Remittance_1 = __importDefault(require("./Remittance"));
const Bulk_1 = __importDefault(require("./Bulk"));
const ExpressCash_1 = __importDefault(require("./ExpressCash"));
const Misc_1 = __importDefault(require("./Misc"));
const AgencyBanking_1 = __importDefault(require("./AgencyBanking"));
// Init router and path
const router = express_1.Router();
// Add sub-routes
router.use('/collection', Collection_1.default);
router.use('/payment', Payment_1.default);
router.use('/remittance', Remittance_1.default);
router.use('/bulk', Bulk_1.default);
router.use('/expresscash', ExpressCash_1.default);
router.use('/misc', Misc_1.default);
router.use('/agencybanking', AgencyBanking_1.default);
// Export the base-router
exports.default = router;
