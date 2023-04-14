$('#searchGiphy').on('click', function (evt) {
	evt.preventDefault();
	let searchTerm = $('input').val();
	getGiphy(searchTerm);

	$('input').val('');
});

$('#removeImages').on('click', function (evt) {
	evt.preventDefault();
	$('.allGiphyImages').empty();
});

async function getGiphy(keyword) {
	let giphy = await axios.get(
		`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
	);
	addGiphy(giphy.data.data[0].images.original.url);
}

function addGiphy(results) {
	console.log(results);
	let newImg = $('<img>', { src: results, class: 'giphy' });
	$('.allGiphyImages').append(newImg);
}
