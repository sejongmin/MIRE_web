function showDetail_jm(){
    document.querySelector('.jm').style.display="block";
}
function hideDetail_jm(){
    document.querySelector('.jm').style.display="none";
}

function showDetail_gc(){
    document.querySelector('.gc').style.display="block";
}
function hideDetail_gc(){
    document.querySelector('.gc').style.display="none";
}

function showDetail_pt(){
    document.querySelector('.pt').style.display="block";
}
function hideDetail_pt(){
    document.querySelector('.pt').style.display="none";
}

function showDetail_gr(){
    document.querySelector('.gr').style.display="block";
}
function hideDetail_gr(){
    document.querySelector('.gr').style.display="none";
}


function showDetail_yj(){
    document.querySelector('.yj').style.display="block";
}
function hideDetail_yj(){
    document.querySelector('.yj').style.display="none";
}

function showDetail_sj(){
    document.querySelector('.sj').style.display="block";
}
function hideDetail_sj(){
    document.querySelector('.sj').style.display="none";
}

function showDetail_hs(){
    document.querySelector('.hs').style.display="block";
}
function hideDetail_hs(){
    document.querySelector('.hs').style.display="none";
}

let map = document.getElementsById("map");
map.src = "https://www.openstreetmap.org/export/embed.html?bbox=" + (lon-0.01) + 
				"%2C" + (lat-0.01) + "%2C" + (lon+0.01) + "%2C" + (lat + 0.01);