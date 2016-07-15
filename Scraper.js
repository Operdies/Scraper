var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var ImdbReader = require('./ImdbReader');

//app.get('/scrape', function(req, res) {

var url = 'http://www.imdb.com/title/tt3416828/?ref_=cs_ov_tt';


request(url, function (error, response, html) {
    if (!error) {
        var callback = function (obj) {
            reader = obj.result;
            if (reader.title) {
                console.log(reader.title);
            }
            if (reader.rating)
                console.log(reader.rating);
            if (reader.release)
                console.log(reader.release);

        };
        var reader = new ImdbReader(html, callback);
    }
});
//});

//app.listen('1337');


module.exports = app;
