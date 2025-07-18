const express = require('express');
const path = require('path');
const adminData = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine','pug');
app.use(bodyParser.urlencoded({extended:  false}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',adminData.routes);
app.use(shopRoutes);
app.use((req,res,next) => {
    res.status(404).render('404', {pageTitle: 'Page not Found'});

})
app.listen(3000);
