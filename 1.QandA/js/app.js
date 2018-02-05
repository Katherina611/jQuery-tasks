$(()=>{
    console.log('działa');
    let header=$('h1');
    let par=$('p');
    console.log(header);
    console.log(par);
    par.hide();
    header.on('click', (e)=>{
        $(e.target).next().slideToggle(500);

    })
});