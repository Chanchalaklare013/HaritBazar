import { createVendor, viewVendor, updateVendor } from "../controller/vendor.controller.js";

import express from 'express';

const router = express.Router();

router.post('/new-vendor', createVendor);
router.get('/view-vendor', viewVendor);
router.post('/update-vendor', updateVendor);

export default router;