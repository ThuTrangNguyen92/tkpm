'use strict';
//tạo controller dạng đối tượng để sau này định nghĩa dễ hơn

const controller = {};
//khai báo biến models, tương ứng thư mục models = CSDL
const models = require('../models');
controller.showHomepage = async (req,res)=>{
    res.render('index');
}
controller.showPage = (req,res,next)=>{
    const pages =['cart','checkout','contact','login','my-account','product-detail','product-list','wishlist'];
    if(pages.includes(req.params.page))
        return res.render(req.params.page);
    next();
}

module.exports = controller;