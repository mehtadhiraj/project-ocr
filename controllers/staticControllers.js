const fs =  require('fs');
const pdfData = require('../data/pdfdata.json');
module.exports.index = function(req, res, next){
    console.log(pdfData);
    res.render('./index', pdfData);
}