

$(function(){
     $("#item").click(function(){
     	$("#submenu").toggle(2000);
     });


});

$(document).ready(function(){
 
  $(document).on("click", "#add_comment",function(){
   var form=$("form[name='form']");
   form.css("display","block");
   $("#add_comment").replaceWith(form);

 });


  $(document).on("click","input[name='send']",function(){
var comment = $("textarea[name='comment']").val();

$("<p>" + comment + "</p>").appendTo("#comments");

if (comment=="") {
	alert("Пожалуйста,заполните поле")
}

  });

});

