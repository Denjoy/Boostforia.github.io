$(document).ready(function(){

    $(".fil-cat").click(function(){
        var value = $(this).attr('data-rel');
        
        if(value == "all")
        {
            $('.tile').show('1000');
        }
        else
        {
            $(".tile").not('.'+value).hide('3000');
            $('.tile').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".fil-cat").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});