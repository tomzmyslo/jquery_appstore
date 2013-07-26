$(function() {
  $.getJSON('http://appstore.kitchenatomy.com/api/v1/apps.json', function(data) {
    var items = [];

    $.each(data, function(key, val) {
      items.push('<tr id="' + key + '">' +
                 '<td><img src="' + val.icon.thumb.url + '" class="img-rounded"/></td>' +
                 '<td><h3>' + val.title + '</h3></td>' +
                 '<td><h3>' + val.download_count + '</h3></td>' +
                 '</tr>');
    });
    
    console.log(items);

    $('<table/>', {
      'class': 'table',
      html: items.join('')
    }).appendTo('#myApps');
    
    $('<tr/>').html('<th>Icon</th><th>Title</th><th>Version</th>').prependTo('.table');
  });
});