$.get('/scrape', function(data){
	//console.log(data[0]);
	$('#results').html(data[0].stock + " " + data[0].price + " " + data[0].percent + " " + data[0].change);
	$('#results2').html(data[1].stock2 + " " + data[0].price2 + " " + data[1].percent2 + " " + data[1].change2);
	$('#results3').html(data[2].stock3 + " " + data[0].price3 + " " + data[2].percent3 + " " + data[2].change3);
});