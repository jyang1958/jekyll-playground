function nav(c, data) {
  var container = c.append('nav')
    .attr('class', 'navbar navbar-inverse navbar-fixed-top')
    .append('div').attr('class', 'container');
  var navbar_header = container.append('div').attr('class', 'navbar-header');

  var button = navbar_header.append('button')
      .attr('type', 'button')
      .attr('class', 'navbar-toggle collapsed')
      .attr('data-toggle', 'collapse')
      .attr('data-target', '#navbar')
      .attr('aria-expanded', 'false')
      .attr('aria-controls', 'navbar');
  button.append('span').attr('class', 'sr-only').html('Toggle navigation');
  button.append('span').attr('class', 'icon-bar');
  button.append('span').attr('class', 'icon-bar');
  button.append('span').attr('class', 'icon-bar');

  navbar_header.append('a').attr('href', '#').attr('class', 'navbar-brand').html('BDM');

  container.append('div')
    .attr('id', 'navbar')
    .attr('class', 'collapse navbar-collapse')
    .append('ul')
    .attr('class', 'nav navbar-nav')
    .selectAll('li')
    .data(data)
    .enter()
    .append('li')
    .append('a')
    .attr('href', function (d) { return `#${d}` })
    .html(function (d) { return d; });
}

