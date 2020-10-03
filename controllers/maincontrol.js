const quotes = require('../data/quotes.json');

exports.getQuotes = (req,res,next) =>{
    res.status(200).json(quotes);
    next();
};
exports.getRandom = (req,res,next) =>{
    res.status(200).json(quotes[Math.floor(Math.random()*quotes.length)]);
    next();
};