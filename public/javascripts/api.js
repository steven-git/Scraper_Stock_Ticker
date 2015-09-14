
$(document).ready(function(){
	$.get('/scrape', function(data){
		//var rannum = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
		console.log(data);

		var firstRow = [results1, results1a];

		var results1 = '<td class="first-col">Bloomberg</td><td class="other-col">' + data[0].stock + '</td><td class="other-col">' + data[1].stock1 + '</td><td class="other-col">' + data[2].stock2 + '</td><td class="other-col">' + data[3].stock3 + '</td><td class="other-col">' + data[4].stock4 + '</td><td class="other-col">' + data[5].stock5 + '</td>';
		var results1a = '<td class="first-col">Bloomberg</td><td class="other-col">' + data[6].stock6 + '</td><td class="other-col">' + data[7].stock7 + '</td><td class="other-col">' + data[8].stock8 + '</td><td class="other-col">' + data[9].stock9 + '</td><td class="other-col">' + data[10].stock10 + '</td><td class="other-col">' + data[11].stock11 + '</td>';
		
		var results2 = '<td class="no-border-bottom blackout first-col">SEP 2 <span class="marginl-15">10:23ET</span></td><td class="no-border-bottom other-col">' + data[0].price + '</td><td class="no-border-bottom other-col">' + data[1].price1 + '</td><td class="no-border-bottom other-col">' + data[2].price2 + '</td><td class="no-border-bottom other-col">' + data[3].price3 + '</td><td class="no-border-bottom other-col">' + data[4].price4 + '</td><td class="no-border-bottom other-col">' + data[5].price5 + '</td>';
		var results2a = '<td class="no-border-bottom blackout first-col">SEP 2 <span class="marginl-15">10:23ET</span></td><td class="no-border-bottom other-col">' + data[6].price6 + '</td><td class="no-border-bottom other-col">' + data[7].price7 + '</td><td class="no-border-bottom other-col">' + data[8].price8 + '</td><td class="no-border-bottom other-col">' + data[9].price9 + '</td><td class="no-border-bottom other-col">' + data[10].price10 + '</td><td class="no-border-bottom other-col">' + data[11].price11 + '</td>';

		var results3 = '<td class="no-border-top blackout first-col">@Business</td><td class="no-border-top other-col">' + data[0].change + '<span class="marginl-15">' + data[0].percent + '</span></td><td class="no-border-top other-col">' + data[1].change1 + '<span class="marginl-15">' + data[1].percent1 + '</span></td><td class="no-border-top other-col">' + data[2].change2 + '<span class="marginl-15">' + data[2].percent2 + '</span></td><td class="no-border-top other-col">' + data[3].change3 + '<span class="marginl-15">' + data[3].percent3 + '</span></td><td class="no-border-top other-col">' + data[4].change4 + '<span class="marginl-15">' + data[4].percent4 + '</span></td><td class="no-border-top other-col">' + data[5].change5 + '<span class="marginl-15">' + data[5].percent5 + '</span></td>';
		var results3a = '<td class="no-border-top blackout first-col">@Business</td><td class="no-border-top other-col">' + data[6].change6 + '<span class="marginl-15">' + data[6].percent6 + '</span></td><td class="no-border-top other-col">' + data[7].change7 + '<span class="marginl-15">' + data[7].percent7 + '</span></td><td class="no-border-top other-col">' + data[8].change8 + '<span class="marginl-15">' + data[8].percent8 + '</span></td><td class="no-border-top other-col">' + data[9].change9 + '<span class="marginl-15">' + data[9].percent9 + '</span></td><td class="no-border-top other-col">' + data[10].change10 + '<span class="marginl-15">' + data[10].percent10 + '</span></td><td class="no-border-top other-col">' + data[11].change11 + '<span class="marginl-15">' + data[11].percent11 + '</span></td>';
		
		$('#results').html(results1);
		$('#results2').html(results2);
		$('#results3').html(results3);


		colorStocks();
		
		setInterval(function(){
			if($('#results').children().eq(1).text() == "Dow"){
				console.log("true");
				$('#results').html(results1a);
				$('#results2').html(results2a);
				$('#results3').html(results3a);

			} else{
				console.log("false");
				$('#results').html(results1);
				$('#results2').html(results2);
				$('#results3').html(results3);
			}

			colorStocks();

		}, 5000);

		function colorStocks() {
			if($('#results3 > td:eq(1):contains("-")').length){
				$('#results3 > td:eq(1), #results2 > td:eq(1)').addClass("negative");
			} else {
				$('#results3 > td:eq(1), #results2 > td:eq(1)').addClass("positive");
			}

			if($('#results3 > td:eq(2):contains("-")').length){
				$('#results3 > td:eq(2), #results2 > td:eq(2)').addClass("negative");
			} else {
				$('#results3 > td:eq(2), #results2 > td:eq(2)').addClass("positive");
			}

			if($('#results3 > td:eq(3):contains("-")').length){
				$('#results3 > td:eq(3), #results2 > td:eq(3)').addClass("negative");
			} else {
				$('#results3 > td:eq(3), #results2 > td:eq(3)').addClass("positive");
			}

			if($('#results3 > td:eq(4):contains("-")').length){
				$('#results3 > td:eq(4), #results2 > td:eq(4)').addClass("negative");
			} else {
				$('#results3 > td:eq(4), #results2 > td:eq(4)').addClass("positive");
			}

			if($('#results3 > td:eq(5):contains("-")').length){
				$('#results3 > td:eq(5), #results2 > td:eq(5)').addClass("negative");
			} else {
				$('#results3 > td:eq(5), #results2 > td:eq(5)').addClass("positive");
			}

			if($('#results3 > td:eq(6):contains("-")').length){
				$('#results3 > td:eq(6), #results2 > td:eq(6)').addClass("negative");
			} else {
				$('#results3 > td:eq(6), #results2 > td:eq(6)').addClass("positive");
			}
		}
		
	});

});


