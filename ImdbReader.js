var cheerio = require('cheerio');

module.exports = function (html, done) {

    var $ = cheerio.load(html);
    var self = this;

    var ReadPage = function (cb) {
        var result = {title:'', rating:'', release:''};

        $('.title_wrapper').filter(function () {

            var elements = $(this).children();
            var titleIndex = elements.length - 2;
            var title = elements.eq(titleIndex).text();

            var pattern = /\(original title\)/i;
            result.title = title.replace(pattern, '').trim();
            //console.log(title);
        });
        result.rating = $('.ratingValue').text().trim();
        var release = $('.subtext').text();        
        release = release.split('|');
        result.release = release[release.length - 1].trim();

        cb(result);

    };

    var cb = function (result) {
        self.result = result;
        done(self);
    };
    ReadPage(cb);
    
    
};