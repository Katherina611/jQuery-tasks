$(()=>{
    console.log('działa');
    let $nav=$('nav');
    let $menu=$('.menu');
    let $top = $menu.position().top;
    console.log($nav);
    console.log($menu);
    console.log($top);

    $(window).on('scroll', ()=>{
        let $scroll=$(document).scrollTop();
        if($scroll>$top){
            $menu.addClass('sticky')
        }else{
            $menu.removeClass('sticky')
        }
    });

    $(window).on('resize', ()=>{
        let $scroll=$(document).scrollTop();
        if($menu.hasClass('sticky')){
            $top = $menu.position().top;
        }else{
            $top = $nav.position().top;
        }
    })
});
