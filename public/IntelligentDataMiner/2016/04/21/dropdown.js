---
div:
  attr:
    class: dropdown
button:
  attr:
    class: btn btn-default dropdown-toggle
    type: button
    id: dropdownMenu
    data-toggle: dropdown
    aria-haspopup: true
    aria-expanded: true
span:
  attr:
    class: caret
ul:
  attr:
    class: dropdown-menu
    aria-labelledby: dropdownMenu
---
function dropdown(container, data) {
  var div = container.append('div').attr({{ page.div.attr | jsonify}});
  var button = div.append('button').attr({{ page.button.attr | jsonify }}).html('Dropdown');
  var span = button.append('span').attr({{ page.span.attr | jsonify }});
  var ul = div.append('ul').attr({{ page.ul.attr | jsonify }});
  ul.selectAll('li')
    .data(data)
    .enter()
    .append('li')
    .append('a')
    .attr('href', function (d) { return d.url; })
    .html(function (d) { return d.text;} );
}
