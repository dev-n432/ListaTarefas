$(document).ready(function(){

    $("form").on("submit",function(e){
        e.preventDefault();
        
        let item = $("#novaTarefa").val();
        $("#lista").append("<li>" + item + "</li>");
        $("#novaTarefa").val("");

    })

    $("#lista").on("click", "li", function(){
        $(this).toggleClass("completos");
      });

})