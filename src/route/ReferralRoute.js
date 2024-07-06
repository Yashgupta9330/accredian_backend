const { Referral} = require('../controller/ReferralController');
const express = require("express")
const router = express.Router()

router.post('/referrals', Referral);

module.exports = router;