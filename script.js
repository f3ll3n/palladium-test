jQuery(function(){
    //Определяем меню и кнопки
    let phoneBtn = $('.phone-icon');
    let addressBtn = $('.map-icon');

    //Интерактивные элементы баннера
    let bnrItemAnimate =  $('.bnr_item_wrap');
    
    //Кривенько убираем меню в зависимости от ивента..
    phoneBtn[0].addEventListener('mouseover', () =>{
        $('.header-main').css({'opacity': '0'});
        console.log('пришёл');
    });
    phoneBtn[0].addEventListener('mouseleave', () =>{
        $('.header-main').css({'opacity': '1'});
        console.log('ушёл');
    });

    addressBtn[0].addEventListener('mouseover', () =>{
        $('.header-main').css({'opacity': '0'});
        console.log('пришёл');
    });
    addressBtn[0].addEventListener('mouseleave', () =>{
        $('.header-main').css({'opacity': '1'});
        console.log('ушёл');
    });
    for(let i = 0; i < $('.bnr_item_wrap').length; i++){
        $('.bnr_item_wrap')[i].addEventListener('mouseover', () =>{
            $('.bnr-position').addClass('main-wrap');
            $('.bnr-position').removeClass('bnr-bottom');
            $('.bnr-bottom').addClass('hide')
            if($('.bnr_item_wrap')[i] == $('.bnr_item_wrap')[0]){
                $('#bnr-text').html('Услуги по ремонту<br/>');
                $('.main-wrap').addClass('main-wrap1');
            }
            else if($('.bnr_item_wrap')[i] == $('.bnr_item_wrap')[1]){
                $('#bnr-text').html('Виды работ по ремонту<br/>');
                $('.main-wrap').addClass('main-wrap2');
            }
            else if($('.bnr_item_wrap')[i] == $('.bnr_item_wrap')[2]){
                $('#bnr-text').html('Дизайн интерьера<br/>');
                $('.main-wrap').addClass('main-wrap3');
            }
            else if($('.bnr_item_wrap')[i] == $('.bnr_item_wrap')[3]){
                $('#bnr-text').html('Ремонт помещений<br/>');
                $('.main-wrap').addClass('main-wrap4');
            }
            else{

            }
            
         });
         $('.bnr_item_wrap')[i].addEventListener('mouseleave', () =>{
            if($('.bnr_item_wrap')[i] == $('.bnr_item_wrap')[i]){
                $('#bnr-text').html('Ремонт <span class="font-stroke">и</span> дизайн<br>');
                $('.bnr-position').removeClass('main-wrap');
                $('.bnr-position').removeClass(`main-wrap1`);
                $('.bnr-position').removeClass(`main-wrap2`);
                $('.bnr-position').removeClass(`main-wrap3`);
                $('.bnr-position').removeClass(`main-wrap4`);
                $('.bnr-bottom').removeClass('hide');
                $('.bnr-bottom').css({'background-image': '("../img/default-bg.jpg")'})
                
            }
         });
    }
    
})
