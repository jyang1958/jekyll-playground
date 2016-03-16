function bootstrap_examples(container, data){ 
  container.selectAll('div') 
    .data(data) 
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
