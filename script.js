$(document).ready(function(){
  $('#search').keyup(function(){
    var searchField = $('#search').val();
    var myExp = new RegExp(searchField, 'i');

  $.getJSON('data2.json', function(data){
    var output = '<ul class="searchresults">';
      $.each(data, function(key,val){
        if ((val.name.search(myExp) != -1 ) || (val.surname.search(myExp) != -1 )) {
          output +='<li>';
          output +='<h3>'  + 'name: ' + '<strong>' + val.name + '</strong></h3>';
          output += '<h3>' + 'surname: '+ val.surname + '</h3>';
          output += '<img src=img/' + val.img +  '_tn.jpg alt=' +val.name +'/>';
          output += '<h4>'+'age: '  + val.age + '</h4>';
          output +='</li>';
        }

      });
    output += '</ul>';
    $('#update').html(output);
  });
});
});
