function bootstrap_examples(container, data){ //add two links to every example, one that leads to bootstraps website the other to a  github person's code
  container.selectAll('div') //selecting all the div created from the bootstrap-examples.html, so basically all the examples
    .data(data) 
    .enter()  //enter the data
    .append('div')  
    .each(function (d) { //for each of the examples
      var s = d3.select(this); //this referes to the example
      s.append('h2') //append a header
       .append('a')  //with a embedded link
       .attr('href', function (d) { 
         return 'https://getbootstrap.com/examples/' + d; //this link leads to the bootstrap page examples
       })
      .html(function (d) { return d;}); //the header has the name of the example as text
      s.append('a') //append another link
       .attr('href', function (d) { 
         return 'https://github.com/twbs/bootstrap/tree/gh-pages/examples/' + d; //this time it leads to a github guy's page
       })
      .html('GitHub source'); //name all of the links github source
    });
}
