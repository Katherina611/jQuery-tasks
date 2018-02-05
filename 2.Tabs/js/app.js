$(()=>{
    console.log('działa');

    let list=$('li');
    let div=$('.tabs div');

    list.on('click', (e)=>{

        if($(e.target).text()==='Tab 1'){
            div.eq(0).slideToggle()
        }else if ($(e.target).text()==='Tab 2'){
            div.eq(1).slideToggle()
        }else if($(e.target).text()==='Tab 3'){
            div.eq(2).slideToggle()
        }else if($(e.target).text()==='Tab 4'){
            div.eq(3).slideToggle()
        }
    })

});