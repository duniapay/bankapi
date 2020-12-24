import { Router } from 'express';
import CollectionRouter from './Collection';
import Paymentouter from './Payment';
import RemittanceRouter from './Remittance';
import BulkRouter from './Bulk';
import ExpresscashRouter from './ExpressCash';
import MiscRouter from './Misc';
import AgencyBankingRouter from './AgencyBanking';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/collection',  CollectionRouter);
router.use('/payment',  Paymentouter);
router.use('/remittance',  RemittanceRouter);
router.use('/bulk',  BulkRouter);
router.use('/expresscash', ExpresscashRouter);
router.use('/misc', MiscRouter);
router.use('/agencybanking', AgencyBankingRouter);


// Export the base-router
export default router;
