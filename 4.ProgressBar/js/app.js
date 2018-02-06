$(()=>{

    console.log('działa ok');
    let btns=$('button');
    let divs=$('.progress-bar');
    console.log(btns);
    console.log(divs);
    let con=divs.find('span');
    console.log(con);
    btns.on('click', (e)=>{
        let $width=$(e.target).data('width');
        let $color=$(e.target).data('color');
        let $id=$(e.target).data('id');
        if($id===1){
            let $span=divs.find('span').eq(0);
            $span.toggleClass($color);
            $span.css('width',$width);
        }else if ($id===2){
            let $span=divs.find('span').eq(1);
            $span.toggleClass($color);
            $span.css('width',$width);
        }else if ($id===3) {
            let $span = divs.find('span').eq(2);
            $span.toggleClass($color);
            $span.css('width', $width);
        }

    })

});
