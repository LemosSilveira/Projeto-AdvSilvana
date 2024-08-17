$('nav a').click(function(e){

    e.preventDefault();
    var id = $(this).attr('href');
   
    console.log(id);

});