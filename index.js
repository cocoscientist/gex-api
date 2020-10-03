const express = require('express');
const app = express();
const routes = require('./router/quoterouter');
app.use('/api',routes);
app.listen(8080,()=>{console.log("Running on port 8080")});