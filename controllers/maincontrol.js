const quotes = require('../data/quotes.json');

exports.getQuotes = (req,res,next) =>{
    const q = req.query;
    if(q.hasOwnProperty('level')){
        quotes.forEach(quote => {
            if(quote.level==q.level){
                res.json(quote.quotes);
                next();
            }
        });
    }else{
        res.json(quotes);
        next();
    }
};
exports.getRandom = (req,res,next) =>{
    const q = req.query;
    if(q.hasOwnProperty('level')){
        quotes.forEach(quote => {
            if(quote.level==q.level){
                const qr = quote.quotes;
                res.json(qr[Math.floor(Math.random()*qr.length)]);
                next();
            }
        });
    }else{
        const qlr = quotes[Math.floor(Math.random()*quotes.length)].quotes;
        res.json(qlr[Math.floor(Math.random()*qlr.length)]);
        next();
    }
};