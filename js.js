var repeat = 4



var lunBo_start = setInterval(function(){
    if(repeat == 0){
        repeat = 4
        $(".lunbo_change").css("background-image",'url("./img/lunbo'+repeat+'.png")')
    }
    else{
        
        $(".lunbo_change").css("background-image",'url("./img/lunbo'+repeat+'.png")')
        repeat -- ;
    }
},3000)





$(".lunbo_left").click(function(){
    if(repeat <= 1){
        repeat = 4
    }
    else{
    repeat = repeat-1  ;
    $(".lunbo_change").css("background-image",'url("./img/lunbo'+repeat+'.png")')
    }
})
$(".lunbo_right").click(function(){
    if(repeat >= 4){
        repeat = 1
    }
    else{
    repeat = repeat+1  ;
    $(".lunbo_change").css("background-image",'url("./img/lunbo'+repeat+'.png")')
    }
})





$(".middle_img_li_1").mouseover(function(){

    $(this).animate({width:"120%",height:"100%"},500);
   

}).mouseout(function(){
    $(this).animate({width:"100%",height:"75%"},500);
});




$(".the1").mouseover(function(){

   
    $(".the11").css({"background-color":"rgb(51, 46, 46)"},500);

}).mouseout(function(){
    $(".the11").css({"background-color":"rgb(246, 246, 246)"},500);
});
$(".the2").mouseover(function(){

   
    $(".the22").css({"background-color":"rgb(51, 46, 46)"},500);

}).mouseout(function(){
    $(".the22").css({"background-color":"rgb(246, 246, 246)"},500);
});

$(".the3").mouseover(function(){

   
    $(".the33").css({"background-color":"rgb(51, 46, 46)"},500);

}).mouseout(function(){
    $(".the33").css({"background-color":"rgb(246, 246, 246)"},500);
});

$(".the4").mouseover(function(){

   
    $(".the44").css({"background-color":"rgb(51, 46, 46)"},500);

}).mouseout(function(){
    $(".the44").css({"background-color":"rgb(246, 246, 246)"},500);
});

$(".the5").mouseover(function(){

   
    $(".the55").css({"background-color":"rgb(51, 46, 46)"},500);

}).mouseout(function(){
    $(".the55").css({"background-color":"rgb(246, 246, 246)"},500);
});

$(".the6").mouseover(function(){

   
    $(".the66").css({"background-color":"rgb(51, 46, 46)"},500);

}).mouseout(function(){
    $(".the66").css({"background-color":"rgb(246, 246, 246)"},500);
});





