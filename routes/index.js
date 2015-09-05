var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');


/* GET home page. */
router.get('/', function(req, res){
	res.render('index');
});

router.get('/scrape', function(req, res, next) {

 // The URL we will scrape from - in our example Anchorman 2.

    var url = 'http://finance.yahoo.com/market-overview/';

    // The structure of our request call
    // The first parameter is our URL
    // The callback function takes 3 parameters, an error, response status code and the html

    request(url, function(error, response, html){

        // First we'll check to make sure no errors occurred when making the request

        if(!error){
            // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality

            var $ = cheerio.load(html);

            // Finally, we'll define the variables we're going to capture

            var stock, percent, change, price;
            var stock2, percent2, change2, price2;
            var stock3, percent3, change3, price3;
            var stock4, percent4, change4, price4;
            var stock5, percent5, change5, price5;
            var stock6, percent6, change6, price6;
            var stock7, percent7, change7, price7;
            var stock8, percent8, change8, price8;
            var stock9, percent9, change9, price9;
            var stock10, percent10, change10, price10;
            var stock11, percent11, change11, price11;
            var stock12, percent12, change12, price12;
            var stock13, percent13, change13, price13;

            var json = { stock : "", percent : "", change : "", price : ""};
            var json2 = { stock2 : "", percent2 : "", change2 : "", price2 : ""};
            var json3 = { stock3 : "", percent3 : "", change3 : "", price3 : ""};
            var json4 = { stock4 : "", percent4 : "", change4 : "", price4 : ""};
            var json5 = { stock5 : "", percent5 : "", change5 : "", price5 : ""};
            var json6 = { stock6 : "", percent6 : "", change6 : "", price6 : ""};
            var json7 = { stock7 : "", percent7 : "", change7 : "", price7 : ""};
            var json8 = { stock8 : "", percent8 : "", change8 : "", price8 : ""};
            var json9 = { stock9 : "", percent9 : "", change9 : "", price9 : ""};
            var json10 = { stock10 : "", percent10 : "", change10 : "", price10 : ""};
            var json11 = { stock11 : "", percent11 : "", change11 : "", price11 : ""};
            var json12 = { stock12 : "", percent12 : "", change12 : "", price12 : ""};
            var json13 = { stock13 : "", percent13 : "", change13 : "", price13 : ""};

			$('#market-panel-tab1').filter(function(){
                stock = $(this).children().children().first().children().children().first().text();
                stock = stock.replace(/^\s+|\s+$|\s+(?=\s)/g, '');

            	percent = $(this).children().children().first().children().children().eq(1).children().eq(2).text();
            	percent = percent.replace(/^\s+|\s+$|\s+(?=\s)/g, '');

            	change = $(this).children().children().first().children().children().eq(1).children().eq(1).text();
            	change = change.replace(/^\s+|\s+$|\s+(?=\s)/g, '');

            	price = $(this).children().children().first().children().children().eq(1).children().eq(0).text();
            	price = price.replace(/^\s+|\s+$|\s+(?=\s)/g, '');

                stock2 = $(this).children().children().eq(1).children().children().first().text();
                stock2 = stock2.replace(/^\s+|\s+$|\s+(?=\s)/g, '');

            	percent2 = $(this).children().children().eq(1).children().children().eq(1).children().eq(2).text();
            	percent2 = percent2.replace(/^\s+|\s+$|\s+(?=\s)/g, '');

            	change2 = $(this).children().children().eq(1).children().children().eq(1).children().eq(1).text();
            	change2 = change2.replace(/^\s+|\s+$|\s+(?=\s)/g, '');

            	price2 = $(this).children().children().eq(1).children().children().eq(1).children().eq(0).text();
            	price2 = price2.replace(/^\s+|\s+$|\s+(?=\s)/g, '');

                stock3 = $(this).children().children().eq(2).children().children().first().text();
                stock3 = stock3.replace(/^\s+|\s+$|\s+(?=\s)/g, '');

            	percent3 = $(this).children().children().eq(2).children().children().eq(1).children().eq(2).text();
            	percent3 = percent3.replace(/^\s+|\s+$|\s+(?=\s)/g, '');

            	change3 = $(this).children().children().eq(2).children().children().eq(1).children().eq(1).text();
            	change3 = change3.replace(/^\s+|\s+$|\s+(?=\s)/g, '');

            	price3 = $(this).children().children().eq(2).children().children().eq(1).children().eq(0).text();
            	price3 = price3.replace(/^\s+|\s+$|\s+(?=\s)/g, '');

                stock4 = $(this).children().children().first().children().children().first().text();
                stock4 = stock4.replace(/^\s+|\s+$|\s+(?=\s)/g, '');


            	json.change = change;
            	json.percent = percent;
                json.stock = stock;
                json.price = price;

            	json2.change2 = change2;
            	json2.percent2 = percent2;
                json2.stock2 = stock2;
                json2.price2 = price2;

            	json3.change3 = change3;
            	json3.percent3 = percent3;
                json3.stock3 = stock3;
                json3.price3 = price3;

            	json4.change4 = change4;
            	json4.percent4 = percent4;
                json4.stock4 = stock4;
                json4.price4 = price4;

            	json5.change5 = change5;
            	json5.percent5 = percent5;
                json5.stock5 = stock5;
                json5.price5 = price5;

            	json6.change6 = change6;
            	json6.percent6 = percent6;
                json6.stock6 = stock6;
                json6.price6 = price6;

            	json7.change7 = change7;
            	json7.percent7 = percent7;
                json7.stock7 = stock7;
                json7.price7 = price7;

            	json8.change8 = change8;
            	json8.percent8 = percent8;
                json8.stock8 = stock8;
                json8.price8 = price8;

            	json9.change9 = change9;
            	json9.percent9 = percent9;
                json9.stock9 = stock9;
                json9.price9 = price9;

            	json10.change10 = change10;
            	json10.percent10 = percent10;
                json10.stock10 = stock10;
                json10.price10 = price10;

            	json11.change11 = change11;
            	json11.percent11 = percent11;
                json11.stock11 = stock11;
                json11.price11 = price11;

            	json12.change12 = change12;
            	json12.percent12 = percent12;
                json12.stock12 = stock12;
                json12.price12 = price12;

            	json13.change13 = change13;
            	json13.percent13 = percent13;
                json13.stock13 = stock13;
                json13.price13 = price13;
            });


        } // Closed if Statement

        var together = Array(json, json2, json3, json4, json5, json6, json7, json8, json9, json10, json11, json12, json13);		
		res.json(together);

    }); // Closed Request Method

}); // Closed Scrape API

module.exports = router;
