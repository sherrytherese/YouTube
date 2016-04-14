//Global Variables


//Ready
$(function(){
	$('#search').submit(function(event){
		event.preventDefault();
		var searchTerm =$('#query').val();
		var orderBy =$('input[name=orderBy]:checked').val();
		var numResults = $('input[name=numResults]:checked').val();
		console.log("order results by " +orderBy);
		console.log("list "+numResults+"results")
		getRequest(searchTerm);
	})
})

//Get from YouTube
function getRequest(searchTerm,numResults,orderBy){
	var params = {
		part: 'snippet',
		key: 'AIzaSyCY-TqUZMC2N6A6TIAGLUNdLhidD4fy6D8',
		q: searchTerm,
		maxResults: numResults,
		order: orderBy
	};
	url = 'https://www.googleapis.com/youtube/v3/search';

	$.getJSON(url, params, function(data){
		console.log(data.items);
		showResults(data.items);
	});
}
//Show in HTML
function showResults(results){
	var html = "";
	$.each(results, function(index,value){
		html += '<p>'+value.snippet.title+'</p>'+'<p>'+'<a href = "https://www.youtube.com/watch?v=' + value.id.videoId +'" target = "_blank">'+'<img src = ' + value.snippet.thumbnails.medium.url + '>'+'</a>' + '</p>';
		console.log(value.snippet.title);
	});
	$('#searchResults').html(html);
}
