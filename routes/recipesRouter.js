'use strict';

const express = require('express');
const router = express.Router();
// nghia la /recipes/
router.get('/',(req,res)=>{
    res.render('recipes');
});
router.get('/',(req,res)=>{
    res.render('recipes');
});

module.exports = router;