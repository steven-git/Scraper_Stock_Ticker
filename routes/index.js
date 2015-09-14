var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');


/* GET home page. */
router.get('/', function(req, res){
	res.render('index');
});

router.get('/scrape', function(req, res, next) { // Create our scrape data api

    var url = 'http://money.cnn.com/data/hotstocks/index.html'; // URL we will be pulling stock data from

    // The structure of our request call
    // The first parameter is our URL
    // The callback function takes 3 parameters, an error, response status code and the html

	request(url, function(error, response, html){
		// First we'll check to make sure no errors occurred when making the request
		if(!error){
			var $ = cheerio.load(html); // Cheerio allows you to use jquery syntax on backend code, in this case the html we pulled from above url

	        // Declare empty json objects, ready to receive data pulled from the html 
	        var json = { stock : "", percent : "", change : "", price : ""};
	        var json1 = { stock1 : "", percent1 : "", change1 : "", price1 : ""};
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

	        $('.tickerDow').filter(function(){ // Target .tickerDow class to start pulling specific data i want.
	        	var stock = $(this).children().eq(0).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');
	        	var percent = '(' + $(this).children().eq(4).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '') + ')';
	        	var change = $(this).children().eq(1).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');
	        	var price = $(this).children().eq(3).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');

	            // Push data just extracted to the empty object properties declared above.
	            json.stock = stock;
	            json.percent = percent;
	            json.change = change;
	            json.price = price;

	        	var stock1 = $(this).parent().children().eq(1).children().eq(0).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');
	        	var percent1 = '(' + $(this).parent().children().eq(1).children().eq(4).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '') + ')';
	        	var change1 = $(this).parent().children().eq(1).children().eq(1).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');
	        	var price1 = $(this).parent().children().eq(1).children().eq(3).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');

	            json1.stock1 = stock1;
	            json1.percent1 = percent1;
	            json1.change1 = change1;
	            json1.price1 = price1;

	        	var stock2 = $(this).parent().children().eq(2).children().eq(0).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');
	        	var percent2 = '(' + $(this).parent().children().eq(2).children().eq(4).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '') + ')';
	        	var change2 = $(this).parent().children().eq(2).children().eq(1).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');
	        	var price2 = $(this).parent().children().eq(2).children().eq(3).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');

	            json2.stock2 = stock2;
	            json2.percent2 = percent2;
	            json2.change2 = change2;
	            json2.price2 = price2;

	        });

	        $('#wsod_hotStocks').filter(function(){ // Target #wsod_hotStocks id to start pulling specific data i want.
	        	var stock3 = $(this).children().eq(4).children().eq(1).children().eq(0).children().first().text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');
	        	var percent3 = '(' + $(this).children().eq(4).children().eq(1).children().eq(3).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '') + ')';
	        	var change3 = $(this).children().eq(4).children().eq(1).children().eq(2).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');
	        	var price3 = $(this).children().eq(4).children().eq(1).children().eq(1).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');

	            json3.stock3 = stock3;
	            json3.percent3 = percent3;
	            json3.change3 = change3;
	            json3.price3 = price3;

	        	var stock4 = $(this).children().eq(4).children().eq(2).children().eq(0).children().first().text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');
	        	var percent4 = '(' + $(this).children().eq(4).children().eq(2).children().eq(3).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '') + ')';
	        	var change4 = $(this).children().eq(4).children().eq(2).children().eq(2).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');
	        	var price4 = $(this).children().eq(4).children().eq(2).children().eq(1).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');

	            json4.stock4 = stock4;
	            json4.percent4 = percent4;
	            json4.change4 = change4;
	            json4.price4 = price4;

	        	var stock5 = $(this).children().eq(4).children().eq(3).children().eq(0).children().first().text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');
	        	var percent5 = '(' + $(this).children().eq(4).children().eq(3).children().eq(3).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '') + ')';
	        	var change5 = $(this).children().eq(4).children().eq(3).children().eq(2).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');
	        	var price5 = $(this).children().eq(4).children().eq(3).children().eq(1).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');

	            json5.stock5 = stock5;
	            json5.percent5 = percent5;
	            json5.change5 = change5;
	            json5.price5 = price5;

	        	var stock6 = $(this).children().eq(4).children().eq(4).children().eq(0).children().first().text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');
	        	var percent6 = '(' + $(this).children().eq(4).children().eq(4).children().eq(3).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '') + ')';
	        	var change6 = $(this).children().eq(4).children().eq(4).children().eq(2).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');
	        	var price6 = $(this).children().eq(4).children().eq(4).children().eq(1).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');

	            json6.stock6 = stock6;
	            json6.percent6 = percent6;
	            json6.change6 = change6;
	            json6.price6 = price6;

	        	var stock7 = $(this).children().eq(4).children().eq(5).children().eq(0).children().first().text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');
	        	var percent7 = '(' + $(this).children().eq(4).children().eq(5).children().eq(3).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '') + ')';
	        	var change7 = $(this).children().eq(4).children().eq(5).children().eq(2).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');
	        	var price7 = $(this).children().eq(4).children().eq(5).children().eq(1).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');

	            json7.stock7 = stock7;
	            json7.percent7 = percent7;
	            json7.change7 = change7;
	            json7.price7 = price7;

	        	var stock8 = $(this).children().eq(4).children().eq(6).children().eq(0).children().first().text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');
	        	var percent8 = '(' + $(this).children().eq(4).children().eq(6).children().eq(3).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '') + ')';
	        	var change8 = $(this).children().eq(4).children().eq(6).children().eq(2).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');
	        	var price8 = $(this).children().eq(4).children().eq(6).children().eq(1).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');

	            json8.stock8 = stock8;
	            json8.percent8 = percent8;
	            json8.change8 = change8;
	            json8.price8 = price8;

	        	var stock9 = $(this).children().eq(4).children().eq(7).children().eq(0).children().first().text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');
	        	var percent9 = '(' + $(this).children().eq(4).children().eq(7).children().eq(3).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '') + ')';
	        	var change9 = $(this).children().eq(4).children().eq(7).children().eq(2).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');
	        	var price9 = $(this).children().eq(4).children().eq(7).children().eq(1).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');

	            json9.stock9 = stock9;
	            json9.percent9 = percent9;
	            json9.change9 = change9;
	            json9.price9 = price9;

	        	var stock10 = $(this).children().eq(4).children().eq(8).children().eq(0).children().first().text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');
	        	var percent10 = '(' + $(this).children().eq(4).children().eq(8).children().eq(3).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '') + ')';
	        	var change10 = $(this).children().eq(4).children().eq(8).children().eq(2).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');
	        	var price10 = $(this).children().eq(4).children().eq(8).children().eq(1).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');

	            json10.stock10 = stock10;
	            json10.percent10 = percent10;
	            json10.change10 = change10;
	            json10.price10 = price10;

	        	var stock11 = $(this).children().eq(4).children().eq(9).children().eq(0).children().first().text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');
	        	var percent11 = '(' + $(this).children().eq(4).children().eq(9).children().eq(3).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '') + ')';
	        	var change11 = $(this).children().eq(4).children().eq(9).children().eq(2).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');
	        	var price11 = $(this).children().eq(4).children().eq(9).children().eq(1).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');

	            json11.stock11 = stock11;
	            json11.percent11 = percent11;
	            json11.change11 = change11;
	            json11.price11 = price11;

	        	var stock12 = $(this).children().eq(4).children().eq(10).children().eq(0).children().first().text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');
	        	var percent12 = '(' + $(this).children().eq(4).children().eq(10).children().eq(3).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '') + ')';
	        	var change12 = $(this).children().eq(4).children().eq(10).children().eq(2).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');
	        	var price12 = $(this).children().eq(4).children().eq(10).children().eq(1).text().replace(/^\s+|\s+$|\s+(?=\s)/g, '');

	            json12.stock12 = stock12;
	            json12.percent12 = percent12;
	            json12.change12 = change12;
	            json12.price12 = price12;

	    	}); // Closed Filter Function

		} //Closed if Statement

	    // Gather all json objects and place in Array called "together". Then make together Array endpoint available to grab using ajax
	    var together = Array(json, json1, json2, json3, json4, json5, json6, json7, json8, json9, json10, json11, json12);		
		res.json(together);

	}); // Closed Request Method


}); // Closed Scrape API

module.exports = router;
