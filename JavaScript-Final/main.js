$('document').ready(function(){
  console.log('Function is ready');
  // TODO: add click handler functionality to button
  $('#clear-button').on('click', function(){
    $( "#all-body").empty();
  });
  $('#search-button').on('click', function(){
    // TODO: pull api request data into js file
    var query = $('#criteria').val();
    var ts = new Date().getTime();
    console.log('TS: ', ts);
    var hash = MD5(ts + '84bcf66c5bf0fd312d7990752d5e7dfb89e72cc1' + '29892350621d77e7a6fc6d59409bf98b').toString()
    var url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&nameStartsWith=${query}&orderBy=name&limit=50&apikey=29892350621d77e7a6fc6d59409bf98b&hash=${hash}`;
    console.log(url);
    var $xhr = $.getJSON(url);
    $xhr.done(function(input){
      console.log('Results', input)
      // TODO: Display information to user
      for (var i = 0; i < input.data.results.length; i++) {
        var name = input.data.results[i].name;
        var description = input.data.results[i].description;
        if (description ==""){
          description = "I can't recall who I am. Bummer";
        }
        var image = input.data.results[i].thumbnail.path + '.' + input.data.results[i].thumbnail.extension;
        var comicCount = input.data.results[i].comics.available;
        var detail = input.data.results[i].urls[0].url;
        var urls = input.data.results[i].urls;
        var comics = input.data.results[i].urls[urls.length-1].url;
        console.log(comics);
        var box = '<div id="body" class="box"><a class="link" target="_blank" href="' + detail + '">' + '<h1 id="results" class="results">' + name + '</h1>' + '<div id="image"><a target="_blank" href="' + detail + '">' + '<img id="image-small" src="' + image + '"></a></div>' + '<p id="description" class="body">' + description + '</p><br>' + '<a target="_blank" href="' + comics + '>' + '</a><p id="comics" class="body"> Number of comic book appearances: ' + comicCount + '</p>' + '</div>';
        $('#all-body').append(box);
      }
    })
  })
});
