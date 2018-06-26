$(document).ready(function (){
});

let url;
let input
$('#submitButton').click(function(){
    input = $('#searchText').val()
    console.log(input)
    searchRepositories(input)
})


function searchRepositories(searchTerms){
    $.ajax({
        url: 'https://api.github.com/search/repositories?q=',
        dataType: 'json',
        data: {
          q: input
          
        },
        success: resp => {
          url 
        }
      })
}