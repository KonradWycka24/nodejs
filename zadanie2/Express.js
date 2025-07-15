const express = require('express');
const website = express();
website.use('/users',(req,res,next) =>
{
    res.send('<h1>This is Users Website page </h1>');
}
);
website.listen(3000);

website.use('/',(req,res,next) =>
{
    res.send('<h1>Default Express Website page </h1>');
    
});
