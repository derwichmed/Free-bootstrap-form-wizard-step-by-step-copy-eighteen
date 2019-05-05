$(function (){
   countStep = $('.form_wizard section .form_item').length;
   nbr_step = 0;
   $('.form_wizard header .progress .progress-bar')
           .css('width',100/countStep+'%');
   
    
    $('.nxt_btn').click(function (){
        $(window).scrollTop(0);
        if(nbr_step < (countStep-1)){
            nbr_step = nbr_step + 1;
        }
        $('.form_wizard header .progress .progress-bar')
           .css('width',(100/countStep)*(nbr_step + 1)+'%');
   
        $('.form_wizard header .steps_header_liste_view .item')
                .eq(nbr_step - 1).removeClass('loading');
        $('.form_wizard header .steps_header_liste_view .item')
                .eq(nbr_step - 1).addClass('active');
        
        $('.form_wizard header .steps_header_liste_view .item')
                .eq(nbr_step).removeClass('disabled');
        $('.form_wizard header .steps_header_liste_view .item')
                .eq(nbr_step).addClass('loading');
        
        $('.form_wizard section .form_item:visible').hide();
        $('.form_wizard section .form_item').eq(nbr_step).fadeIn(500);
    });
    
    $('.pre_btn').click(function (){
        $(window).scrollTop(0);
        if(nbr_step > 0){
            nbr_step = nbr_step - 1;
        }
        $('.form_wizard header .progress .progress-bar')
           .css('width',(100/countStep)*(nbr_step + 1)+'%');
   
        $('.form_wizard header .steps_header_liste_view .item')
                .eq(nbr_step + 1).removeClass('loading');
        $('.form_wizard header .steps_header_liste_view .item')
                .eq(nbr_step + 1).addClass('disabled');
        
        $('.form_wizard header .steps_header_liste_view .item')
                .eq(nbr_step).removeClass('active');
        $('.form_wizard header .steps_header_liste_view .item')
                .eq(nbr_step).addClass('loading');
           
        $('.form_wizard section .form_item:visible').hide();
        $('.form_wizard section .form_item').eq(nbr_step).fadeIn(500);
    });
});