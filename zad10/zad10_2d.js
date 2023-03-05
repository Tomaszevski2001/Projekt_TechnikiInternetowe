var data = ['jeden', 'dwa', 'trzy', 'cztery']
var $list = $('<ul></ul>');
$('#root').append($list)
var items = [];
$.each(data, function(item,i) {
  items.push('<li '+ 'id ="' + item + '">' + i + '</li>');
});
$('ul').append(items.join(''));
$('<p>Nowy element</p>').insertBefore($list)
$('<p>Nowy element</p>').insertAfter($list)
