let scrollTop = 0, bar;
            
const scrollEvent = (e) =>{
    console.log(document.body.scrollHeight, window.outerHeight);
    scrollTop = document.documentElement.scrollTop;
    let per = Math.ceil(scrollTop/(document.body.scrollHeight  - window.outerHeight)* 100);
    bar.style.width = per+'%';
}

window.onload = ()=>{
    bar = document.getElementsByClassName("bar")[0];
}

window.addEventListener("scroll", scrollEvent);