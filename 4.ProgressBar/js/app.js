$(()=>{

    console.log('działa');
    let btns=$('button');
    let divs=$('.progress-bar');
    console.log(btns);
    console.log(divs);
    btns.on('click', (e)=>{
        let $width=$(e.target).data('width');
        let $color=$(e.target).data('color');
        let $id=$(e.target).data('id');
        if($id===1){
            let $span=divs.children;
            $span.toggleClass($color);
            $span.css('width',$width);
        }else if ($id===2){
            let $span=divs.children;
            $span.toggleClass($color);
            $span.css('width',$width);
        }else if ($id===3) {
            let $span = divs.children;
            $span.toggleClass($color);
            $span.css('width', $width);
        }

    })
});
