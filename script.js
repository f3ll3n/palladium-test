jQuery(function(){
    //Определяем меню и кнопки
    let headerMain = $('.header-main');
    let phoneBtn = $('.phone-icon');
    let addressBtn = $('.map-icon');

    
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
})
