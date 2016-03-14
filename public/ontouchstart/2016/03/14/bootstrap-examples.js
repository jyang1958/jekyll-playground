function bootstrap_examples(container, examples){
  container.selectAll('div')
    .data(examples)
    .enter()
    .append('div')
    .each(function (d) {
      var s = d3.select(this);
      s.append('h2')
       .append('a')
       .attr('href', function (d) { 
         return 'https://getbootstrap.com/examples/' + d; 
       })
      .html(function (d) { return d;});
      s.append('a')
       .attr('href', function (d) { 
         return 'https://github.com/twbs/bootstrap/tree/gh-pages/examples/' + d; 
       })
      .html('GitHub source');
    });
}
