var data = ['jeden', 'dwa', 'trzy', 'cztery']
var $list = $('<ul></ul>');
$('#root').append($list)
var items = [];
$.each(data, function(item,i) {
  items.push('<li '+ 'id ="' + item + '">' + i + '</li>');
}); // close each()
$('ul').append(items.join(''));
$("#3").remove()
